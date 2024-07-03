const getAllTasks = (req, res) => {
  res.send("hello from controller");
};

const getTaskById = (req, res) => {
  res.json({ id: req.params.id });
};

const createTasks = (req, res) => {
  res.json(req.body);
};

const updateTasks = (req, res) => {
  res.send("hello create task");
};
const deleteTasks = (req, res) => {
  res.send("hello create task");
};

export { getAllTasks, getTaskById, updateTasks, deleteTasks, createTasks };
