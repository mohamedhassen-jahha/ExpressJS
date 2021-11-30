const express = require("express");
const app = express();

const PORT = 3000;
let nowDate = new Date();

const workHoursHandler = (req, res, next) => {
  if (
    nowDate.getDay() == 0 ||
    nowDate.getDay() == 6 ||
    nowDate.getHours() < 9 ||
    nowDate.getHours() > 17
  ) {
    return res.send("<h1>OUT OF WORK</h1>");
  }
  next();
};

app.use(workHoursHandler);

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/pages/home.html");
});

app.get("/services", (req, res, next) => {
  res.sendFile(__dirname + "/pages/services.html");
});
app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + "/pages/contact.html");
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
