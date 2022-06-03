import UserModel from "../models/userModel.js"
export const getUsers = async (req, res, next) => {
    try {
      const result = await UserModel.find();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  
  export const getUser = async (req, res, next) => {
    try {
      const user = await UserModel.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteUser = async (req, res, next) => {
    try {
      const user = await UserModel.findByIdAndRemove(req.params.id);
      res.status(200).json({ msg: "user deleted successfully!" });
    } catch (error) {
      next(error);
    }
  };
  
  export const updateUser = async (req, res, next) => {
    try {
      const user = await RecordModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
  
  export const addUser = async (req, res, next) => {
    try {
      const user = new RecordModel(req.body);
      await user.save(), res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
  