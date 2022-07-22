import nodemailer from 'nodemailer';


const emailOlvidePassword = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });



    
    const {email,nombre,token} = datos;
    // Enviar el email
    const info = await transporter.sendMail({
        from: 'Admistrador de pacientes de veterinaria',
        to: email, 
        subject: 'Restablece tu contraseña - APV',
        text: 'Restablece tu contraseña - APV',
        html: `<p>Hola ${nombre}!</p>
        <p>Has solicitado restablecer tu contraseña</p>
        <p>Sigue el siguiente enlance para generar un nuevo password</p>
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Contraseña</a>

        <p> Si tu no creaste esta cuenta, puedes ignorar este correo </p>
        `
    });


    console.log('Mensaje Enviado: %s', info.messageId)
}
export default emailOlvidePassword;