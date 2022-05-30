import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.MAILADRESS;

const transporter = nodemailer.createTransport(
  nodemailerSendgrid({
      apiKey: process.env.API_KEY_SENDGRID!
  })
);

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { senderMail, name, content } = req.body;

    const message = {
      from: email,
      to: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `<p><b>Email:</b> ${senderMail}<br /><b>Mensagem:</b> ${content}</p>`,
      replyTo: senderMail
    };

    transporter.sendMail(message);

    return res.json({
      message: "Success"
    });
  } catch ({message}) {
    return res.json({
      error: true,
      message
    });
  }
};

export default sendMail