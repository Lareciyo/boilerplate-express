require('dotenv').config()

let express = require('express');
const path = require('path')

let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
 const messageStyle = process.env['MESSAGE_STYLE'];
console.log('MESSAGE_STYLE:', messageStyle);

  let message = "Hello json";

  if (messageStyle === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message });
});




app.listen(3000, () => {
     console.log("Server is listening on port 3000");
})


 module.exports = app;
