import nodemailer from "nodemailer";
import multiparty from "multiparty";

const util = require("util");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "enviaremailchammasengenharia@gmail.com",
    pass: "Enviaremailchammas.",
  },
});

export default async (req, res) => {
  const { email, subject, text, name, attachment } = req.body;

  console.log("req.file :>> ", req.file);
  // console.log(req.body);
  const form = new multiparty.Form();

  form.parse(req, function (err, fields, files) {
    console.log(fields, files);
  });
  if (!email || !subject || !text) {
    return res.json({ error: "Email or subject or text not filled" });
  }

  console.log(`"Caique Ribeiro de Oliveira" <${email}>`);
  const response = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: "caiquer.eds@gmail.com",
    subject,
    html: `<p>${email}</p>
    <p>${text}</p>`,
    attachments: [{ filename: "Currículo.pdf", path: attachment }],
  });

  console.log(response);

  return res.json(response);
};
