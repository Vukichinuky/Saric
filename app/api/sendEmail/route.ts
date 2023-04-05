const cors = require('cors');
const express = require('express');
const sgMail = require('@sendgrid/mail');

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;
const app = express();
app.use(cors());
app.use(express.json());

sgMail.setApiKey(SG_API_KEY);

app.post('/api/sendEmail', async (req: { body: { name: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; }): void; new(): any; }; }; }) => {
  const { name, email, message } = req.body;
  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: 'Contact',
    html: `<p><strong>name: </strong>${name}</p>
    <p><strong>email: </strong>${email}</p>    
    <p><strong>message: </strong>${message}</p>`,
  };
  await sgMail.send(msg);
  console.log('email sent');
  res.status(200).json({ success: true });
});

module.exports = app;
