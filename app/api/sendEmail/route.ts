import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

const { SG_API_KEY } = process.env;
sgMail.setApiKey(SG_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, message } = req.body;

  const msg = {
    to: "drvuk23@gmail.com", // Replace with your own email address
    from: email,
    subject: "New message from your website",
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
}
