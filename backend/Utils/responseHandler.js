class responseHandler{
    constructor(statusCode,data,message="This is default message"){
        this.statusCode=statusCode,
        this.message=message
        this.data=data
    }
}

module.exports=responseHandler