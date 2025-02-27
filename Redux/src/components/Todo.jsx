import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../Store";
import { MdDelete } from "react-icons/md";

export const Todo = () => {
  const [task, setTask] = useState([]);
  const tasks = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(addTask(task));
  };

  const handlDelete = (id) => {
    return dispatch(deleteTask(id));
  };

  return (
    <div className="bg-slate-400 h-[100vh] flex justify-center items-center">
      <div className="border-2 h-[500px] w-[500px] p-4 rounded-lg">
        <h1 className="text-4xl font-semibold text-amber-900 mb-5">
          Todo List :
        </h1>
        <div className="mb-5">
          <form className="flex items-center ml-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your task"
              className="bg-slate-200 w-[70%] h-[36px] p-2 rounded-l-2xl outline-none"
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              type="submit"
              className="w-[25%] h-[36px] rounded-r-2xl p-1 bg-amber-800"
            >
              Add Task
            </button>
          </form>
        </div>
        
          {tasks.map((task, index) => {
            return (
                <div key={index} className="border w-[95%] flex items-center ml-2 h-[36px] rounded-2xl p-2 mb-2">
                <ul className="w-[100%] flex justify-between" >
                  <li>
                    {index}: {task}
                  </li>
                  <button onClick={() => handlDelete(index)}>
                    <MdDelete />
                  </button>
                </ul>
                </div>
            );
          })}
        </div>
     
    </div>
  );
};
