require('dotenv').config()
const bodyParser = require('body-parser');
let express = require('express');
const path = require('path')
let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) =>{
 console.log(req.method + " " + req.path + " - " + req.ip);
  // console.log(string)
  next()
})

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  let message;
  const style = process.env['MESSAGE_STYLE'];
   if (style === "uppercase") {
    message = "Hello json".toUpperCase();
  } else {
    message = "Hello json";
  }
  res.json({ message });
});

app.get('/now',
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time })
  }
)

app.get('/:word/echo', (req, res)=>{
  const word = req.params.word;
  res.json({ echo: word})
})
app.get('/name', (req, res)=>{
  const firstName = req.query.first;
  const lastName = req.query.last;

  res.json({ name: firstName + " " + lastName })
})

app.post('name', (req, res)=>{
  const first = req.body.first;
  const last = req.body.last;

  res.json({ name: first + " " + last})
})

app.listen(3000, () => {
     console.log("Server is listening on port 3000");
})

app.route('/name').get((req, res)=>{
  const first = req.query.girst;
  const last = req.query.last;
  res.json({ name: first + " " + last })
})
.post((req, res)=>{
  const first = req.body.first;
  const last = req.body.last;
  res.json({ name: first + " " + last })
})


 module.exports = app;
