class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
        this.result=this.query;
    }
     search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {};
        this.result=  this.query.find({...keyword})
    }
    filter(){
        let querycopy={...this.queryStr}
        console.log("first",querycopy)
        let removeField=["keyword","page","limit"]
        removeField.forEach(element => delete querycopy[element]);
        console.log("second",querycopy)
        this.result=  this.query.find(querycopy)
        console.log("3333333333333",this.query)
    }
}

module.exports = ApiFeatures;