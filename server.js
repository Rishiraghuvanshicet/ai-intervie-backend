require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./src/config/db");
const authRouter = require("./src/routes/authRoutes");
const interviewRouter = require("./src/routes/interviewRoutes");

const app = express();
const PORT = 3000;

/*--DB--*/
connectDB();

/*--middlewares--*/
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

/*--Routes--*/
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

app.listen(PORT, () => console.log(`Sever is running at PORT ${PORT}`));
