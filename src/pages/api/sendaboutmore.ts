import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "enviaremailchammasengenharia@gmail.com",
    pass: "Enviaremailchammas.",
  },
});

export default async (req, res) => {
  const { email, subject, message, name, phone } = req.body;

  if (!email || !subject || !message || !name || !phone) {
    return res.json({ error: "Email or subject or message not filled" });
  }

  const response = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: "caiquer.eds@gmail.com",
    subject,
    html: `<p>Email: ${email}</p>
    <p>${message}</p>`,
  });

  return res.json(response);
};
