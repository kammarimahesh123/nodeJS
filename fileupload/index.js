
var express=require('express');
var upload=require('express-fileupload');
var app=express();

app.use(upload());

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
});

app.post('/',(req,res)=>{
    if(req.files)
    console.log(req.files)
    var file=req.files.file;
    //var type1=req.files.mimetype;
    var type=file.mimetype;
    if(type!=='jpeg'||'gif'||'jpg')
    res.send('only jpeg files to upload');
    var filename=file.name;
    console.log(filename);
    file.mv('./uploads/'+filename,(err)=>
    {
       if(err){
       res.send(err);
        }else{
           res.send("file uploaded")
            

        }
        
    });


});

    //res.send("fileUploaded")



app.listen(4040,()=>{
    console.log("server started running at port 4040")
});