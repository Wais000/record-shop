import RecordModel from "../models/recordModel.js"

export const getRecords = async (req, res, next) => {
  try {
    const result = await RecordModel.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getRecord = async (req, res, next) => {
  try {
    const record = await RecordModel.findById(req.params.id);
    res.status(200).json(record);
  } catch (error) {
    next(error);
  }
};

export const deleteRecord = async (req, res, next) => {
  try {
    const record = await RecordModel.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: "record deleted successfully!" });
  } catch (error) {
    next(error);
  }
};

export const updateRecord = async (req, res, next) => {
  try {
    const record = await RecordModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(record);
  } catch (error) {
    next(error);
  }
};

export const addRecord = async (req, res, next) => {
  try {
    const record = new RecordModel(req.body);
    await record.save(), res.status(200).json(record);
  } catch (error) {
    next(error);
  }
};
