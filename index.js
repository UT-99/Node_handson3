const express=require('express');
const app=express();


//Middleware
const middleware=(req,res,next)=>{
    console.log('Hello This is our Middleware');
    console.warn("current route is ", req.originalUrl);
    next();
}



app.get('/',(req,res)=>{
    res.send('<h1 style="text-align:center;color:yellow">Hello , This is the Main Page </h1>')
})
app.get('/about',middleware,(req,res)=>{
    console.log('Hello, This is my About');
    res.send('<h1 style="text-align:center;color:blue">This is about page')
 
})
app.get('/contact',middleware,(req,res)=>{
    res.send('<h1 style="text-align:center;color:green">This is contact')
})
app.get('/login',middleware,(req,res)=>{
    res.send('<h1 style="text-align:center;color:purple">Hello,Please log in here')
})
app.get('/logout',middleware,(req,res)=>{
    res.send('<h1 style="text-align:center;color:brown">This is logout page')
})

app.listen(2302,()=>{
    console.log('Application started on port 2302. ');
})
