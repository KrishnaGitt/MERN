class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
        //console.log("-----------", this.query)
    }
     search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {};
        console.log({ ...keyword })
        this.query=  this.query.find({...keyword})
        console.log("apifeature mai ", this.query)
    }
}

module.exports = ApiFeatures;