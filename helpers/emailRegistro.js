import nodemailer from 'nodemailer';


const emailRegistro = async (datos) => {
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
        subject: 'Confirma tu cuenta en APV',
        text: 'Confirma tu cuenta en APV',
        html: `<p>Bienvenido ${nombre}!</p>
        <p>Gracias por registrarte en APV - Administrador de pacientes de veterinaria</p>
        <p>Por favor verifica tu cuenta dando click en el siguiente boton</p>
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a>

        <p> Si tu no creaste esta cuenta, puedes ignorar este correo </p>
        `
    });


    console.log('Mensaje Enviado: %s', info.messageId)
}
export default emailRegistro;