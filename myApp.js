require('dotenv').config()
let express = require('express');
const path = require('path')

let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    let message = "Hello json";
    if (process.env['MESSAGE_STYLE'] === "uppercase") {
        message = "Hello json".toUpperCase();
    }
   
    res.json({ message });
});




app.listen(3000, () => {
     console.log("Hello World");
})


 module.exports = app;
