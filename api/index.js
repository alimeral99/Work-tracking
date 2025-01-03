const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

require("dotenv").config();

const { handlerwebHook } = require("./controllers/stripe");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://work-tracking.onrender.com",
    methods: ["GET", "POST"],
  },
});
app.io = io;

app.use((req, res, next) => {
  if (req.originalUrl === "/api/webhook") {
    next(); // Do nothing with the body because I need it in a raw state.
  } else {
    express.json()(req, res, next); // ONLY do express.json() if the received request is NOT a WebHook from Stripe.
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://work-tracking.onrender.com",
    credentials: true,
    methods: "PATCH,DELETE,POST,GET",
  })
);

const workingRouter = require("./routes/working");
const authRouter = require("./routes/auth");
const stripeRouter = require("./routes/stripe");

app.post(
  "/api/webhook",
  express.raw({ type: "application/json" }),
  handlerwebHook
);
app.use("/auth", authRouter);
app.use("/api", workingRouter);
app.use("/stripe", stripeRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

io.on("connection", (socket) => {
  socket.emit("test", { test: "test" });
});

server.listen(
  process.env.PORT,
  console.log(`Server running on port ${process.env.PORT} `)
);

app.use((error, req, res, next) => {
  const errorResponse = {
    statusCode: error.statusCode || 500,
    message: error.message || "Something went wrong!",
  };
  return res.status(errorResponse.statusCode).json(errorResponse.message);
});
