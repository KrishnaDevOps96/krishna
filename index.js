const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [];
let idCounter = 1;

// Health check
app.get('/', (req, res) => {
  res.send('Task Service is running.');
});

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add new task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  const newTask = { id: idCounter++, title };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).send('Task not found');
  task.title = req.body.title || task.title;
  res.json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Task service running at http://localhost:${PORT}`);
});
