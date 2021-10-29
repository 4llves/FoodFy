const crypto = require('crypto');
const { hash } = require('bcryptjs');

const User = require('../models/User');
const mailer = require('../../lib/mailer');
const { emailTemplate } = require('../../lib/utils');

module.exports = {
    loginForm(req, res) {
        return res.render('session/login');
    },
    login(req, res) {
        req.session.userId = req.user.id;
        req.session.isAdmin = req.user.is_admin;
        return res.redirect(`/admin/users/profile`);
    },
    logout(req, res) {
        req.session.destroy();
        return res.redirect('/');
    },
    forgotForm(req, res) {
        return res.render('session/forgot-password');
    },
    async forgot(req, res) {
        try {
            const { user } = req;
            const token = crypto.randomBytes(20).toString('hex');

            let now = new Date();
            now = now.setHours(now.getHours() + 1);

            await User.update(user.id, {
                reset_token: token,
                reset_token_expires: now
            });

            const email = `
            <h2 style="font-size: 24px; font-weight: normal;">Perdeu sua Senha?</h2>
            <br>
            <p>
                Não se preocupe ${user.name}. 🐱‍💻
                <br><br>
                Basta apenas clicar no botão abaixo para recupera-lá:
            </p>
            <p style="text-align: center;">
                <a
                    style="display: block; margin: 32px auto; padding: 16px; width:150px; color: #fff;
                    background-color: #111; text-decoration: none; border-radius: 4px;"
                    href="http:localhost:5001/admin/users/password-reset?token=${token}" target="_blank"
                >Recuperar</a> 
            </p>
            <p style="padding-top:16px; border-top: 2px solid #ccc">att: Equipe Foodfy.</p>            
            `;

            mailer.sendMail({
                to: user.email,
                from: 'no-reply@foodfy.com.br',
                subject: 'Recuperação de senha',
                html: emailTemplate(email)
            })

            return res.render('session/forgot-password', {
                success: 'Email de recuperação enviado! Verifique sua caixa de entrada para resetar sua senha!'
            });
        } catch (err) {
            console.error(err);
            return res.render('session/forgot-password', {
                error: 'Ops, algo deu errado. Tente novamente!'
            });
        }
    },
    resetForm(req, res) {
        return res.render('session/password-reset', { token: req.query.token });
    },
    async reset(req, res) {
        const { user } = req;
        const { password, token } = req.body;

        try {
            const newPassword = await hash(password, 8);

            await User.update(user.id, {
                password: newPassword,
                reset_token: '',
                reset_token_expires: ''
            });

            return res.render('session/login', {
                user: req.body,
                success: 'Senha atualizada! Faça o seu login.'
            })

        } catch (err) {
            console.error(err);
            return res.render('session/password-reset', {
                user: req.body,
                token,
                error: 'Ops, algo deu errado. Tente novamente!'
            });
        }
    }
}