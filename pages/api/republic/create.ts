import nodemailer from 'nodemailer'

export default async function (req: any, res: any) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'vlrepublics@gmail.com',
      pass: 'gxxpynctsisgvunh',
    },
  })

  const mailData = {
    from: 'vlrepublics@gmail.com',
    to: req.body.email,
    subject: `Propozycja założenia nowej republiki '${req.body.republicName}' od ${req.body.name}`,
    text: req.body.description,
    html: `<div>${req.body.description}</div><p>Sent from: ${req.body.email}</p>`,
  }

  await transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log('ERROR:', err)
      return res.status(400).end()
    } else {
      console.log('INFO:', info)
      return res.status(200).end()
    }
  })
}
