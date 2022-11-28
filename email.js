

var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport(
    {
        service:'gmail',
        auth: 
        {
            user:"kammarimahesh1@gmail.com",
            password:"9705871624"
        }
    });

    var mailOptions=
    {
        from:"kammarimahesh1@gmail.com",
        to:"kammarimahesh90@gmail.com",
        subject: "path for success",
        text: "Arise, awake and stop not till the goal is reached"
    };

    transporter.sendMail(mailOptions,(err,info)=>{
        if(err) 
        {
            console.log(err);
        }
        else{
            console.log("Email sent:" +info.response);
        }
    });