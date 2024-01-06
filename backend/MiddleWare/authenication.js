exports.authenication=function(req,res,next){

    const accestoken=req.cookie||req.header("Authorization").replace("Bearer","");
    console.log("-------->>",accestoken);
    next();
}
