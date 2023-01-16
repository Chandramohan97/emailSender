const app = require("express")();
const path = require("path");
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/DELL/OneDrive/Desktop/nodePractice/emailSender/index.html"
  );
});

app.listen(port);
