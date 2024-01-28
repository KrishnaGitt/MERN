const Order = require("../models/orderModel");
const errorHandler = require("../Utils/errorHandler");
const responseHandler = require("../Utils/responseHandler");
const Product = require("../models/productModel");

exports.createOrder = async (req, res) => {
  const {
    shippInfo,
    orderItem,
    paymentInfo,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippInfo,
    orderItem,
    paymentInfo,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });
  res
    .status(200)
    .json(new responseHandler(200, "order", "Order created sucessFully"));
};

exports.getSingleOrder = async (req, res) => {
  const order = await Order.findById(req.params).populate("user", "name email");
  if (!order) {
    throw new errorHandler(404, "Could able to find the respected order");
  }
  res
    .status(200)
    .json(new responseHandler(200, order, "Please check the order details"));
};

exports.getMyOder = async (req, res) => {
  const order = await Order.findById({ user: req.user.id });
  if (!order) {
    throw new errorHandler(404, "Could able to find the respected order");
  }
  res
    .status(200)
    .json(new responseHandler(200, order, "Please check the order details"));
};
//Admin--get all product

exports.getAllOrders = async (req, res) => {
  const order = await Order.find();

  if (!order) {
    throw new errorHandler(404, "Could able to find the ORDERS");
  }
  let totalAmount = 0;
  order.forEach((order) => {
    totalAmount += order.totalPrice;
  });
  res
    .status(200)
    .json(
      new responseHandler(
        200,
        { order, totalAmount: totalAmount },
        "Please check the order details"
      )
    );
};
// Update order by admin-----------

exports.updateOrder = async (req, res) => {
  const orders = await Order.findById(req.params);
  orders.orderItem.forEach(async (item) => {
    await updateStock(item.product, item.quantity);
  });
  async function updateStock(productID, quantity) {
    const product = await Product.findById(productID);
    product.stock -= quantity;
    await product.save({ validateBeforeSave: false });
  }
  if (!orders) {
    throw new errorHandler(404, "Could able to find the respected order");
  }
  res
    .status(200)
    .json(new responseHandler(200, orders, "Please check the order details"));
};

exports.deleteOrder = async (req, res) => {
  const orders = await Order.findById(req.params);
  if (!orders) {
    throw new errorHandler(404, "Could able to find the respected order");
  }
  const order = await orders.deleteOne(req.params);
  res
    .status(200)
    .json(new responseHandler(200, order, " order deleted sucessfully"));
};
