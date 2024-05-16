import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  const { email } = await request.json();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"John Stanley Altonaga" <johntaltonaga@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Thank you for subscribing to Aphrodite!", // Subject line
    // message will include a png image
    html: 'Here is a lucky picture of Alcris Tapic to hopefully lighten your day. <img src="cid:123@aphrodite.com"/>',
    attachments: [
      {
        filename: "Tapic.png",
        path: "https://res.cloudinary.com/dafend6qz/image/upload/v1715872380/uomihwax117xrcgowrik.jpg",
        cid: "123@naphrodite.com", //same cid value as in the html img src
      },
    ],
  });

  return NextResponse.json(
    { message: "Message sent successfully!" },
    { status: 201 }
  );
};
