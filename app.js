const path= require('path');
const express= require('express');
const adminRouter= require('./Routes/admin');
const shopRouter = require('./Routes/shop');

const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRouter);
app.use(shopRouter);


app.use('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','page-not-found.html'));

})






app.listen(3000);