import React, { useContext, useState, useEffect } from "react";
import "./ToDoList.css";
import { TodoContext } from "../context/TodoContext";
import { ACTIONS } from "../reducer/TodoReducer";
import Button from "../shared/Button";
import Search from "../shared/Search";
import TodoCard from "./TodoCard";

const ToDoList = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleBatchRemove = () => {
    dispatch({
      type: ACTIONS.BATCH_REMOVE,
    });
  };
  useEffect(() => {
    let newTodos = todos
      .filter((t) => t.title.toLowerCase().includes(searchInput.toLowerCase()))
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    setFilteredTodos(newTodos);
  }, [searchInput, todos]);

  return (
    <div>
      <h2>To Do List</h2>
      <Search searchInput={searchInput} onChange={handleSearchChange}></Search>
      <div className="todo-list">
        {filteredTodos.length !== 0 ? (
          filteredTodos.map((item) => (
            <>
              <TodoCard item={item} dispatch={dispatch} />
              {item.selected && (
                <div className="bulk-action">
                  <div className="bulk-action__button">
                    <Button
                      inverse="inverse"
                      size="medium"
                      onClick={() => {
                        dispatch({
                          type: ACTIONS.RESET,
                        });
                      }}
                    >
                      Reset
                    </Button>
                    <Button
                      danger="danger"
                      size="medium"
                      onClick={handleBatchRemove}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              )}
            </>
          ))
        ) : (
          <p>You have no todos at the moment.</p>
        )}
      </div>
    </div>
  );
};
export default ToDoList;
