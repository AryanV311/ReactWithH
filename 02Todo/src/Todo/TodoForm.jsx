/* eslint-disable react/prop-types */
import { useState } from "react";


export const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue({id:value, content:value, checked:false});
      };
     
      const  handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id:"", content:"", checked:false})
      }
      
  return (
    <section className="form">
    <form onSubmit={handleFormSubmit}>
      <div>
        <input
          type="text"
          className="todo-input"
          autoComplete="off"
          value={inputValue.content}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" className="add-btn">
          Add List
        </button>
      </div>
    </form>
  </section>
  )
}
