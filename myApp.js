require('dotenv').config()
let express = require('express');
const path = require('path')
let app = express();
app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
    let message;
    if (process.env['MESSAGE_STYLE'] === "uppercase") {
        message = "Hello json".toUpperCase();
    }
    else {
        message = "Hello json";
    }
    res.json({ "message": `${message}` });
});




app.listen(3000, () => {
     console.log("Server is listening on port 3000");
})


 module.exports = app;
