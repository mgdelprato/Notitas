const path = require('path')
const express = require('express');
const app = express();
const indexRouter = require('./src/routes/index');
const noteRouter = require('./src/routes/note');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, './public')))
app.use('/', indexRouter);
app.use('/casa', indexRouter)
app.use('/note', noteRouter);




app.listen(3030, ()=>{
    console.log("Server Arriba");
    console.log("http://localhost:3030");
})
