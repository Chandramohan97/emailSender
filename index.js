const app = require("express")();
const path = require("path");
const nodemailer = require("nodemailer");
const bodyparse = require("body-parser");
const { getMaxListeners } = require("process");
const port = 8080;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chandramsriv@gmail.com",
    pass: "********",
  },
});

app.use(bodyparse.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/DELL/OneDrive/Desktop/nodePractice/emailSender/index.html"
  );
});

app.post("/", (req, res) => {
  const mailDetails = {
    from: "chandramsriv@gmail.com",
    to: req.body.mail,
    subject: "Sending mails using nodeJs",
    text: "Easy",
  };

  transporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      res.send("Error occurs");
    } else {
      res.send("Email sent successfully");
    }
  });
});

app.listen(port);
