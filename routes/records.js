import express from "express";
import {
  addRecord,
  deleteRecord,
  getRecord,
  getRecords,
  updateRecord
} from "../controller/recordsController.js";

const router = express.Router();

router.route("/").get(getRecords).post(addRecord);

router.route("/:id").get(getRecord).delete(deleteRecord).put(updateRecord);

export default router;
