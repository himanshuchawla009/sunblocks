const express=require('express')
var path=require('path');

const app=express();
app.use(express.static(path.join(__dirname,'dist')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));

});
const port =process.env.PORT || '3001';
app.set('port',port);
app.listen(port,()=>console.log("running"));
