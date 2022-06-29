import { createTransport } from "nodemailer";

const TEST_MAIL = "diego.jofre@bue.edu.ar";
const asunto = process.argv[2];
const mensaje = process.argv[3];

const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: "sroqvhxdcrxwgbmn",
  },
});

const mailOptions = {
  from: "Servidor Node.js",
  to: "diego-jofre@live.com.ar",
  subject: asunto,
  html: mensaje,
  attachments: [
    {
      path: "58F.jpg",
    },
  ],
};

try {
  const info = await transporter.sendMail(mailOptions);
  console.log(info);
} catch (error) {
  console.log(error);
}

// import twilio from "twilio";

// const accountSid = "ACdb39b7fae6bb12596a65fa30708519d6";
// const authToken = "b07a7e9ac634f195b63a9dfb370ec8e7";

// const client = twilio(accountSid, authToken);

// try {
//   const message = await client.messages.create({
//     body: "Hola soy un SMS desde Node.js!",
//     from: "+19895141613",
//     to: "+541167930120",
//   });
//   console.log(message);
// } catch (error) {
//   console.log(error);
// }
