import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import specRoutes from "./routes/specRoutes.js";
//configure env
dotenv.config(); //Since this file is in root we don't need anything else we need to write config({path:"path/apth/path"})

//database config
connectDB();

//rest object
const app = express();

//middleware - morgan configuration and express json configuration
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/specs", specRoutes);
app.use("/api/v1/products", productRoutes);
//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Buy Right APIs</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});
