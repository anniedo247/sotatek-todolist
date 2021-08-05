import React, { useState } from "react";
import "./ToDoList.css";
import { ACTIONS } from "../reducer/TodoReducer";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "../shared/Button";
import ToDoDetails from "./ToDoDetails";

export const TodoCard = ({ item, dispatch, handleClose, handleOpen }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='todo-card'>
      <div className="todo-item">
        <input className="checkbox" type="checkbox" />
        <p className="checkbox-title">
          {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
        </p>
      </div>
      <div className="todo-item">
        <Button inverse="inverse" size="small" onClick={()=>setShowDetails(true)}>
          View
        </Button>
        <Button
          danger="danger"
          size="small"
          onClick={() =>
            dispatch({
              type: ACTIONS.REMOVE,
              payload: {
                id: item.id,
              },
            })
          }
        >
          <HiOutlineTrash />
        </Button>
      </div>
      {showDetails && <ToDoDetails handleClose={()=>setShowDetails(false)} item={item} />}
      
    </div>
  );
};
export default TodoCard;
