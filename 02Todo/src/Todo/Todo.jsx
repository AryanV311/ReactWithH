
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { useState } from "react";

const todoKey = "reactTodo"

export const Todo = () => {
  const [task, setTask] = useState(() => {
    const rawtodo = localStorage.getItem(todoKey)
    if(!rawtodo) return [];
    return JSON.parse(rawtodo);
  });

  //* add to todo localStorage
  localStorage.setItem(todoKey, JSON.stringify(task))


  const handleFormSubmit = (inputValue) => {
    const { id, content, checked} = inputValue;
    if (!content) return;

    const ifTodoContentMatch = task.find((curElem) => curElem.content === content);
    console.log(ifTodoContentMatch);
    if(ifTodoContentMatch) return;

    setTask((prev) => [...prev, {id, content, checked}]);
    
  };

  const handleDeleteTask = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  }

  const handleCheckedTodo = (content) => {
    const upadtedTask = task.map((curElem) => {
      if(curElem.content === content){
        return { ...curElem, checked:!curElem.checked}
      } else{
        return curElem;
      }
    });
    setTask(upadtedTask);
  }

  const handleClearAll =() => {
    setTask([])
  }

  return (
    <section className="todo-conatiner">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
     <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrderList">
        <ul>
          { task.map((curElem) => {
            return (
               <TodoList key={curElem.id} data={curElem.content} onHandleDeleteTodo={handleDeleteTask} onHandleCheckedTodo={handleCheckedTodo} checked={curElem.checked}/>
            )
          })
          }
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearAll}>clear All</button>
      </section>
    </section>
  );
};
