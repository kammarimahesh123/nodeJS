const express=require('express')

const orderModel=require('./model')

const app=express();

const bodyparser=require('body-parser')
app.get('/order',(req,res)=>{
    res.send("Ready to create a new order");
})
app.post('/add_order', async(req,res)=>{
    const order=new orderModel(req.body);
        try{
        await order.save();
        res.send(order);
    }catch(error){
        res.sendStatus(403,error)
    }

});
app.get("/aggregate",async(req,res)=>{
    const aggregate=await orderModel.aggregate([
        {$match:{size:"medium"}},
        {$group: {_id:"$name", totalQuantity:{$sum:"$quantity"}}}]);
    try{
    res.send(aggregate);}
    catch(error){
        res.sendStatus(403,error)
    }
});
app.get('/group',async(req,res)=>{
    const group=await orderModel.aggregate([
        {$match:{"date": {$gt: '2022-12-01',$lte:'2022-12-03'}}},
        {
            $group: 
            {
                _id: "$date",
                totalOrderValue : {$sum :{ $multiply :["$price","$quantity"]}},
                averageOrderQuantity: {$avg:"$quantity"}
            }
            
        },
        { $sort :{totalOrderValue:-1}
        
    }])
        try{
            res.send(group);
        }catch{
            res.sendStatus(403)
        }
});


app.get('/orders',async(req,res)=>{
    const orders=await orderModel.find({})
    try{
        res.send(orders)
    }catch{
        res.send("couldn't find")
    }
});
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
module.exports=app;