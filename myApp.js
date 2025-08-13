require('dotenv').config()
let express = require('express');
const path = require('path')

let app = express();



app.get('/',  (req, res)=>{
    htmlPath = __dirname +'/views/index.html';
    res.sendFile(htmlPath)
});
app.use("/public", express.static(__dirname + "/public"));

app.get('/json', (req, res) => {
    const message = "Hello json"
    const messageStyle = process.env.MESSAGE_STYLE;

    res.responseMessage = messageStyle === 'uppercase' ? message.toLocaleUpperCase() :message;
    res.json({ message: responseMessage })
});

app.listen(3000, () => {
     console.log("Hello World");
})


 module.exports = app;
