const express = require('express')
const path = require('path')
const indexRouter = require('./routes/index.route.js')

const app = express();

app.use(express.urlencoded({ extended: true }));
const asset = path.join(__dirname,'public')
app.use(express.static(asset))

console.log(asset)

app.set('views', path.join(__dirname,'view'))
app.set('view engine','ejs');

app.use("/", indexRouter)

app.listen(5000, () => console.log('server is running!'));
