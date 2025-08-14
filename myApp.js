require('dotenv').config()
let express = require('express');
const path = require('path')

let app = express();



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
app.use("/public", express.static(__dirname + "/public"));

app.get('/json', (req, res) => {
    let message;
    if(process.env['MESSAGE_STYLE'] === "uppercase"){
message = "Hello json".toUpperCase()
    } else{
        message = "Hello json"
    }
    res.json({ "message": `${message}`  })
});

app.listen(3000, () => {
     console.log("Hello World");
})


 module.exports = app;
