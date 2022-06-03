import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Logger from "morgan";
import cors from "cors";
import userRouter from "./routes/users.js"
import orderRouter from "./routes/orders.js"
import recordRouter from "./routes/records.js"

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Logger("dev"));
dotenv.config();
const PORT = process.env.PORT

app.use("/orders",orderRouter)
app.use("/records",recordRouter)
app.use("/users",userRouter)

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message,
      },
    });
  });
  

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log("Database connected and server is running on port" , PORT)
    )
  )
  .catch((error) => console.log(error));
