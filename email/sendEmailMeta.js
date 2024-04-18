const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_EMAIL, META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: META_EMAIL,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmailMeta = async (data) => {
  const email = { ...data, from: "iryna.bird@meta.ua" };
  console.log("I am sendEmailMeta", email);
  await transport.sendMail(email);

  return true;
};

module.exports = sendEmailMeta;

// const email = {
//   to: "nowin34166@watrf.com",
//   from: "iryna.bird@meta.ua",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong> from localhost:3000</p>",
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));
// const sendEmailMeta = async (verifyEmail) => {
//   // const { email, name, text } = req.body;

//   const config = {
//     host: "smtp.meta.ua",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "iryna.bird@meta.ua",
//       pass: process.env.PASSWORD,
//     },
//   };

//   const transporter = nodemailer.createTransport(config);
//   const emailOptions = {
//     from: "iryna.bird@meta.ua",
//     to: email,
//     subject: "Nodemailer test",
//     text: `${text}, Отправитель: ${name}`,
//   };
//   transporter
//     .sendMail(emailOptions)
//     .then((info) => console.log(info))
//     .catch((err) => console.log(err));

// };

// const email = {
//   to: "nowin34166@watrf.com",
//   from: "iryna.bird@meta.ua",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong>from localhost: 3000</p>",
// };

// transport
//   .send(email)
//   .then(() => console.log("Email send sucess"))
//   .catch((error) => console.log(error.message));
