import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : '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')

  const { name, email, message } = req.body // Get the form data from the request body

  const msg = {
    to: 'drvuk23@gmail.com', // Replace with your email address
    from: email,
    subject: `New message from ${name}`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(msg)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error sending email' })
  }
}
