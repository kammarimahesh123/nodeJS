
var fs=require('fs')

fs.open('myFile.txt', 'w',function(err,file)
{
    if(err) throw err;
    console.log("saved!")
});

fs.writeFile('myFile.txt', "Hi. Welcome to Archents", function(err)
{
    if(err) throw err;
    console.log("updated")
});
fs.appendFile('myFile.txt',"You have successfully completed one month of training. Congratulations.", function(err)
{
    if(err) throw err;
    console.log("appended")
});