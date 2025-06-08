import nodemailer from 'nodemailer'
const createMailSender = (email, subject, htmlTemplate) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service provider
        auth: {
            user: 'your-email@gmail.com', // Replace with your email
            pass: 'your-email-password', // Replace with your email password or app password
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com', // Replace with your email
        to: email,
        subject: subject,
        html: htmlTemplate,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = createMailSender;