let express = require('express');
const path = require('path')

let app = express();



app.get('/',  (req, res)=>{
    htmlPath = __dirname +'/views/index.html';
    res.sendFile(htmlPath)
});
app.use("/public", express.static(_dirname + "/public"))

app.listen(3000, () => {
     console.log("Hello World");
})
   


































 module.exports = app;
