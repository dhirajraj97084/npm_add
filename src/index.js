const express=require('express');
const router=require('../router/router')
const app=express();

app.use(express.json());
app.use('/api/auth', router);

app.listen(3000,()=>{
    console.log('your application is succefully run localhost');
})