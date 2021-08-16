const express = require('express');
const morgan = require('morgan');

const PORT = 3000;
const app = express();


app.use(morgan('combined'));

app.get('/',(req,res)=> res.send('Hello'));

app.listen(PORT,'localhost',()=> console.log('connected'));