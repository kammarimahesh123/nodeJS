
var MongoClient=require('mongodb').MongoClient;

var url='mongodb://127.0.0.1:27017/';



MongoClient.connect(url, function(err,db)
{
    if(err) throw err;
    var dbo=db.db('mahesh');
    dbo.collection('posts').aggregate([
        {$lookup:{
            from:"products",
            localField:"company1",
            foreignField:"company",
            as:"companyDetails"
        }},{$limit:1}
    ]).toArray(function(err,res)
    {
        if(err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
    
});

