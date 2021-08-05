import React, { useContext, useState, useEffect } from "react";
import "./ToDoList.css";
import { TodoContext } from "../context/TodoContext";
import Button from "../shared/Button";
import Search from "../shared/Search";
import TodoCard from "../UI/TodoCard";

const ToDoList = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    console.log(todos);
    let newTodos = todos
      .filter((t) =>
        t.title.toLowerCase().startsWith(searchInput.toLowerCase())
      )
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
            <div className='card-wraper'>
              <TodoCard item={item} dispatch={dispatch} />
            </div>
          ))
        ) : (
          <p>You have no todos at the moment.</p>
        )}
      </div>
      <div className="bulk-action">
        <p>Bulk Action:</p>
        <div className="bulk-action__button">
          <Button inverse="inverse" size="small">
            Done
          </Button>
          <Button danger="danger" size="small">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ToDoList;
