const ApiFeatures = require("../Utils/apiFeature");
const Product = require("../models/productModel")


exports.getAllProducts = async (req, res) => {

    // let data = await Product.find();
   const apiFeatures= new ApiFeatures(Product, req.query)
 apiFeatures.search();
 apiFeatures.filter();
  apiFeatures.result.then((a)=>{
    console.log("kkkkkkkkkkk",a);
    res.status(200).json(a);
  })
}


exports.createProduct = async (req, res) => {
    try {
        let product = await Product.create(req.body);
        res.status(201).json({
            sucess: true,
            product
        })
    } catch (error) {
        console.error("er---------", error)
    }

}
exports.updateProduct = async (req, res) => {
    let data = await Product.findById(req.params);
    if (!data) {
        return res.status(501).json({
            sucess: false,
            message: "Product is not there",
            data
        })
    }

    data = await Product.findByIdAndUpdate(req.params, req.body)

    res.status(200).json({
        data,
        sucess: true
    });
}

exports.deleteProduct = async (req, res) => {
    let product = await Product.findById(req.params);

    if (!product) {
        return res.status(501).json({
            sucess: false,
            message: "Product is not there",
            product
        })
    }
    product = await product.deleteOne(req.params);

    res.status(200).json({
        product,
        sucess: true,
        messgae: "Product deleted"
    });
}

exports.getProducts = async (req, res) => {
    let product = await Product.findById(req.params);

    if (!product) {
        return res.status(501).json({
            sucess: false,
            message: "Product is not there",
            product
        })
    }

    res.status(200).json({
        sucess: true,
        product
    })
}