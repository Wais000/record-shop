import OrderModel from "../models/orderModel.js";

export const getOrders = async (req, res, next) => {
  try {
    const result = await OrderModel.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const order = await OrderModel.findById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const order = await OrderModel.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: "order deleted successfully!" });
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const order = await OrderModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const addOrder = async (req, res, next) => {
  try {
    const order = new OrderModel(req.body);
    await order.save(), res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};
