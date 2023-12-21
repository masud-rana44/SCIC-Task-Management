import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiTrash } from "react-icons/bi";
import { createTask, deleteTask, getAllTasks } from "../api";

const Dashboard = () => {
  const { register, handleSubmit, reset } = useForm();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getAllTasks();
      setTasks(tasks);
    };
    fetchTasks();
  });

  const onSubmit = async (data) => {
    const newTask = {
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
      status: "todo",
    };

    await createTask(newTask);
    reset();
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const taskId = e.dataTransfer.getData("taskId");
    const updatedTasks = tasks.map((task) => {
      if (task._id === Number(taskId)) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Task Management Dashboard
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-10 max-w-2xl mx-auto "
      >
        <label htmlFor="title" className="block mb-2 font-medium">
          Title:
        </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: true })}
          className="border border-gray-300 rounded p-2 bg-gray-50 mb-2 w-full bg-gray-50"
        />

        <label htmlFor="description" className="block mb-2 font-medium">
          Description:
        </label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          className="border border-gray-300 rounded p-2 bg-gray-50 mb-2 w-full bg-gray-50"
        />

        <label htmlFor="deadline" className="block mb-2 font-medium">
          Deadline:
        </label>
        <input
          type="date"
          id="deadline"
          {...register("deadline", { required: true })}
          className="border border-gray-300 rounded p-2 bg-gray-50 mb-2 w-full bg-gray-50"
        />

        <label htmlFor="priority" className="block mb-2 font-medium">
          Priority:
        </label>
        <select
          id="priority"
          {...register("priority", { required: true })}
          className="border border-gray-300 rounded p-2 bg-gray-50 mb-4 w-full bg-gray-50"
        >
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>

        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Add Task
        </button>
      </form>

      <hr />
      <div className="mt-10 flex justify-between gap-x-6 max-w-5xl mx-auto">
        <div className="w-1/3 ">
          <h2 className="text-xl font-bold mb-2">To-Do</h2>
          <ul
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "todo")}
            className="border border-gray-300 rounded p-2 bg-gray-50 space-y-2"
          >
            {tasks
              .filter((task) => task.status === "todo")
              .map((task) => (
                <li
                  key={task._id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task._id)}
                  className="flex justify-between items-center mb-2 border border-gray-300 rounded p-2 bg-white"
                >
                  <span className="font-medium">{task.title}</span>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  >
                    <BiTrash />
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div className="w-1/3  ">
          <h2 className="text-xl font-bold mb-2">Ongoing</h2>
          <ul
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "ongoing")}
            className="border border-gray-300 rounded p-2 bg-gray-50 space-y-2"
          >
            {tasks
              .filter((task) => task.status === "ongoing")
              .map((task) => (
                <li
                  key={task._id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task._id)}
                  className="flex justify-between items-center mb-2 border border-gray-300 rounded p-2 bg-white"
                >
                  <span className="font-medium">{task.title}</span>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  >
                    <BiTrash />
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div className="w-1/3 ">
          <h2 className="text-xl font-bold mb-2">Completed</h2>
          <ul
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "completed")}
            className="border border-gray-300 rounded p-2 bg-gray-50 space-y-2"
          >
            {tasks
              .filter((task) => task.status === "completed")
              .map((task) => (
                <li
                  key={task._id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task._id)}
                  className="flex justify-between items-center mb-2 border border-gray-300 rounded p-2 bg-white"
                >
                  <span className="font-medium">{task.title}</span>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  >
                    <BiTrash />
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
