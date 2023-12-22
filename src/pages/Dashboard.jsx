import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { deleteTask, getAllTasks } from "../api";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getAllTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    setTasks(tasks.filter((task) => task._id !== taskId));
    await deleteTask(taskId);
  };

  // Remove the unused handleDragStart function
  // const handleDragStart = (e, taskId) => {
  //   e.dataTransfer.setData("taskId", taskId);
  // };

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

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const updatedTasks = Array.from(tasks);
    const [removed] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, removed);

    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mt-10 text-3xl font-bold mb-4 text-center">
        Task Management Dashboard
      </h1>

      <hr />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="mt-10 gap-x-6 gap-y-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Droppable droppableId="todo">
            {(provided) => (
              <div
                ref={provided.innerRef}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "todo")}
                className="mb-8"
              >
                <h2 className="text-xl font-bold mb-2">To-Do</h2>
                <ul className="border border-gray-600 rounded p-2 bg-gray-700 space-y-2">
                  {tasks
                    .filter((task) => task.status === "todo")
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-3  flex-1 flex justify-between items-center bg-gray-400 rounded-lg"
                          >
                            <span className="font-semibold text-lg text-gray-900">
                              {task.title}
                            </span>
                            <button
                              onClick={() => handleDelete(task._id)}
                              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                            >
                              <BiTrash />
                            </button>
                          </li>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>

          <Droppable droppableId="ongoing">
            {(provided) => (
              <div
                ref={provided.innerRef}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "ongoing")}
                className="mb-8"
              >
                <h2 className="text-xl font-bold mb-2">Ongoing</h2>
                <ul className="border border-gray-600 rounded p-2 bg-gray-700 space-y-2">
                  {tasks
                    .filter((task) => task.status === "ongoing")
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-3  flex-1 flex justify-between items-center bg-gray-400 rounded-lg"
                          >
                            <span className="font-semibold text-lg text-gray-900">
                              {task.title}
                            </span>
                            <button
                              onClick={() => handleDelete(task._id)}
                              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                            >
                              <BiTrash />
                            </button>
                          </li>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>

          <Droppable droppableId="completed">
            {(provided) => (
              <div
                ref={provided.innerRef}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "completed")}
                className="mb-8"
              >
                <h2 className="text-xl font-bold mb-2">Completed</h2>
                <ul className="border border-gray-600 rounded p-2 bg-gray-700 space-y-2">
                  {tasks
                    .filter((task) => task.status === "completed")
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-3  flex-1 flex justify-between items-center bg-gray-400 rounded-lg"
                          >
                            <span className="font-semibold text-lg text-gray-900">
                              {task.title}
                            </span>
                            <button
                              onClick={() => handleDelete(task._id)}
                              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                            >
                              <BiTrash />
                            </button>
                          </li>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
