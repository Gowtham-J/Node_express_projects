import express from "express";
import tasks from "./router/task.js";
import connectDB from "./database/connect.js";
const app = express();

app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("Hey there we're in ");
});

connectDB();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}....`);
});
