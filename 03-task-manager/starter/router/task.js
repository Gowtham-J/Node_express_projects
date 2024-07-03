import express from "express";
import {
  getAllTasks,
  createTasks,
  getTaskById,
  updateTasks,
  deleteTasks,
} from "../controller/task.js";

const router = express.Router();

router.route("/").get(getAllTasks).post(createTasks);
// .get((req, res)=>{
//     res.json()
// });
router.route("/:id").get(getTaskById).patch(updateTasks).delete(deleteTasks);

export default router;
