// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// Незалежний поштовий сервіс
// Зареєструватись, зайти в Setting - API Keys створити ключ і обов'язково скопіювати та вставити в проект,
// Setting - Sender Authentication - підтвердити свій емеіл

// const { SENDGRID_API_KEY } = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

// const sendEmailSendgrid = async (data) => {
//   const email = { ...data, from: "bird.forest70@gmail.com" };
//   await sgMail.send(email);
//   return true;
// };

// module.exports = sendEmailSendgrid;

// ******************************8
// const email = {
//   to: "nowin34166@watrf.com",
//   from: "bird.forest70@gmail.com",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong>from localhost: 3000</p>",
// };

// sgMail
//   .send(email)
//   .then(() => console.log("Email send sucess"))
//   .catch((error) => console.log(error.message));
