
var MongoClient=require('mongodb').MongoClient;

var url="mongodb://127.0.0.1:27017/";

//const client=new Mongoclient(url)
MongoClient.connect(url, function(err,db)
{
    if(err) throw err;
    //console.log("database created");
    
    var dbo=db.db('mahesh');
    
    //dbo.createCollection("userdetails", function(err,res)
//{
  //  if(err) throw err;
    //console.log("collection created")
   // var myObj={name: "mahesh", email:"kammarimahesh1@gmail.com"};
// var myObj2={name: "Tulasi", email:"Tulasilkammari1@gmail.com"};
// var myObj3={name: "vaishnav", email:"vaishnavkammari1@gmail.com"};
// var myObj4={name: "nagamani", email:"nagamanikammari1@gmail.com"};
//     dbo.collection("userdetails").insertMany([myObj3,myObj4],function(err,data)
//     {
//         if(err) throw err;
//         console.log('more two recoreds inserted')
//         db.close();
//     });
// });

     var mysort={name:-1};
    // var query={name:'mahesh'};
    // // dbo.collection("userdetails").deleteOne(query,function(err,result)
    // // {
    // //     if(err) throw err;
    // //     console.log("1 deleted document" );
    // //     db.close();
    // // });

//     dbo.collection("userdetails").find({},{projection:{_id:0}}).sort(mysort).toArray(function(err,result)
//     {
//         if(err) throw err;
//         console.log(result);
//         db.close();
//     })
// });
 var old={email:"Tulasilkammari1@gmail.com"}
 var newemail={$set : {email:"Tulasikammari1@gmail.com"}}
 dbo.collection("userdetails").updateOne(old,newemail,function(err,obj)
{
    if(err) throw err;
    console.log("one document updated");
    console.log(obj.result.nModified);
    db.close();
})
});