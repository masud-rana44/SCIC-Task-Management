import { useForm } from "react-hook-form";
import { createTask } from "../api";
import { Button } from "../components/ui/Button";

const AddNewTask = () => {
  const { register, handleSubmit, reset } = useForm();
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="mt-10 text-3xl font-bold mb-4 text-center">
        Task Management Dashboard
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-10 max-w-2xl mx-auto space-y-3"
      >
        <div>
          <label htmlFor="title" className="block mb-2 font-medium">
            Title:
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset dark:bg-slate-600 outline-none  text-black dark:text-gray-100 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6 "
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 font-medium">
            Description:
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset dark:bg-slate-600 outline-none  text-black dark:text-gray-100 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6 "
          />
        </div>

        <div>
          <label htmlFor="deadline" className="block mb-2 font-medium">
            Deadline:
          </label>
          <input
            type="date"
            id="deadline"
            {...register("deadline", { required: true })}
            className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset dark:bg-slate-600 outline-none  text-black dark:text-gray-100 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6 "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block mb-2 font-medium">
            Priority:
          </label>
          <select
            id="priority"
            {...register("priority", { required: true })}
            className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset dark:bg-slate-600 outline-none  text-black dark:text-gray-100 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6 "
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <Button type="submit" className=" text-white py-2 px-4 rounded ">
            Add New Task
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewTask;
