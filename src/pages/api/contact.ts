import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.MAILADRESS;

const transporter = nodemailer.createTransport(
  nodemailerSendgrid({
      apiKey: process.env.API_KEY_SENDGRID!
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { senderMail, name, content } = req.body;

    if (!senderMail.trim() || !name.trim() || !content.trim()) {
      // return res.status(403).send('');
      throw new Error('Verifique se todos os campos estão preenchidos!')
    }

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