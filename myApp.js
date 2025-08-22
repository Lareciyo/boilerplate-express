require('dotenv').config()
let express = require('express');
const path = require('path')
let app = express();
app.use("/public", express.static(__dirname + "/public"));

app._router((req, res, next) =>{
  let string = req.method + "" + req.path + "-" + req.ip;
  console.log(string)
  next()
})

app.get("/json", (req, res) => {
  let message;
  const style = process.env['MESSAGE_STYLE'];
  console.log('MESSAGE_STYLE:', style); // debug
  if (style === "uppercase") {
    message = "Hello json".toUpperCase();
  } else {
    message = "Hello json";
  }
  res.json({ message });
});




app.listen(3000, () => {
     console.log("Server is listening on port 3000");
})


 module.exports = app;
