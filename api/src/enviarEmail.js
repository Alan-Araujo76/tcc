
import nodemailer from 'nodemailer'
const sender = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 500,
  secure: false,
  auth: {
    user: 'juliogames590@gmail.com',
    pass: 'rezendeevil',
  },
});


async function enviarEmail(para, assunto, mensagem) {
    const response = await sender.sendMail({
      from: '"TCC INSF" <mailing.tcc.info@acaonsfatima.org.br>',
      to: para, 
      subject: assunto,
      html: mensagem
    })
    return response;
  }
  
  
  export default enviarEmail;