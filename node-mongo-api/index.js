const connection = require('./model')
const express = require('express')
const app = express()
const path = require('path')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended:true
}))

app.set('views',path.join(__dirname,'/views/'))

app.engine('hbs',expressHandlebars({
  extname:'hbs',
  defaultLayout:'mainlayout',
  layoutsDir:__dirname + 'views/Layouts'
}))

app.set('view engine','hbs')
app.get('/',(req,res) => {
  res.send('<h1>HTML PAGE</h1>')
})


app.listen('3000',() => {
  console.log('Server started...')
})