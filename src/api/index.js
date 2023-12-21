import axios from "axios";

const baseUrl = "http://localhost:5000";

// Get all tasks
export const getAllTasks = async () => {
  // use axios to make a get request to the backend
  const { data } = await axios.get(`${baseUrl}/tasks`);
  return data;
};

// Get a single task
export const getTask = async (id) => {
  const { data } = await axios.get(`${baseUrl}/tasks/${id}`);
  return data;
};

// Create a task
export const createTask = async (task) => {
  const { data } = await axios.post(`${baseUrl}/tasks`, task);
  return data;
};

// Update a task
export const updateTask = async (id, task) => {
  const { data } = await axios.patch(`${baseUrl}/tasks/${id}`, task);
  return data;
};

// Delete a task
export const deleteTask = async (id) => {
  const { data } = await axios.delete(`${baseUrl}/tasks/${id}`);
  return data;
};
