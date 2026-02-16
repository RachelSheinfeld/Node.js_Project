exports.errorHandler=((err,req,res,next)=>{
    console.log(err.stack);
    res.send("Somthing broke!")
})