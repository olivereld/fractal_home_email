
const sgMail = require('@sendgrid/mail');

class EmailService {
  static async sendEmail(){       
    try {
      sgMail.setApiKey(process.env.SENDGRID);      
      const msg = {
        to: 'cryptozuelan@gmail.com', // Change to your recipient
        from: 'olivereldd@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail.send(msg)
        .then(() => {
          console.log('enviado')
          return ({message:'Email sent'})
        })
        .catch( (error:any) => {
          console.log(error)
          return {error};
        })          

    } catch (error) {
      console.log('fallo2')
      return {error}
    }
  }
}
export default EmailService;
