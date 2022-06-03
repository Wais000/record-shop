import mongoose from "mongoose";

const RecordSchema = mongoose.Schema({
  title: String,
artist:String,
year: Number,
price:Number,
});
const RecordModel= mongoose.model("Record", RecordSchema)
export default RecordModel