class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
    this.result = this.query;
    console.log(" this.query", this.query);
    console.log(" this.querystr", this.queryStr);
  }
  search() {
    //key={name:"krihsna"}
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    console.log("kkkkkkkkkk", keyword);
    this.query = this.query.find({ ...keyword });
  }
  filter() {
    console.log("iam insdie filert-----------------------");
    let querycopy = { ...this.queryStr };
    let removeField = ["keyword", "page", "limit"];
    removeField.forEach((element) => delete querycopy[element]);
    let quertReg = JSON.stringify(querycopy);
    quertReg = quertReg.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    console.log("this is req",quertReg)
    this.query = this.query.find(JSON.parse(quertReg));
  }
  pagination(resultPerPage) {
    let currentPage = Number(this.queryStr.page) || 1;
    let skip = resultPerPage * (currentPage - 1);
    this.query=this.query.limit(resultPerPage).skip(skip)
  }
}

module.exports = ApiFeatures;
