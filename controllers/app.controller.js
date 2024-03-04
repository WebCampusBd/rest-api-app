const path = require("path");

exports.homePage = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/home.html"));
};

exports.clientErrorPage = (req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname + "/../views/error.html"));
}

exports.serverErrorPage = (err,req,res,next) =>{
    res.status(500).send({
        message : "Something Broke!",
        error : err
    });
}