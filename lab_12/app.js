const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({extended:true}))
//app.set('port', process.env.PORT);
//console.log(app.get(`port`));
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

app.use(productRouter);
app.use(userRouter);
app.use(function(err,req,res,next){
    res.status(500).send('something broke');
});
app.use(function(req,res,next){
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
} );
app.listen(3000, () => {
//console.log('Your Server is running on 3000');
});