/* eslint-disable react/prop-types */
import { MdCheck, MdDeleteForever } from "react-icons/md";


export const TodoList = ({ checked, data, onHandleDeleteTodo, onHandleCheckedTodo }) => {

  return (
    <li className="task-list">
    <span className={checked?"checkList":"notCheckList"}>{data}</span>
    <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
      <MdCheck />
    </button>
    <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
      <MdDeleteForever />
    </button>
  </li>
  )
}
