const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const { readFile } = require("fs");

const app = express();
const PORT = process.env.PORT || 5050;

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/", (request, responseC) => {
  responseC.sendFile(path.join(__dirname, "style.css"));
});

app.post("/", function (req, res) {
  const nam = req.body.nameofperson;
  const eml = req.body.email;
  const mbl = req.body.phone;
  const mes = req.body.message;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nashbudinc@gmail.com",
      pass: "saia waup drvf ssch",
    },
  });

  var mailOption = {
    from: "nashbudinc@gmail.com",
    to: req.body.email,
    subject: "Thanks for giving feedback : " + nam,
    text: "Thanks for your Message you have sent to us -->" + mes,
    html: `
    <div>
    <p>Name: ${nam}</p>
    <p>Email: ${eml}</p>
    <p>Mobile No : ${mbl}</p>
    <p>Message: ${mes}</p>
    </div>`,
  };

  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
      console.log("email sent" + info.response);
    }
  });
});

app.listen(PORT, function () {
  console.log(`server started at ${PORT}`);
});
