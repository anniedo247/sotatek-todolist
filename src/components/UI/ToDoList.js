import React, {useContext,useState,useEffect} from 'react';
import './ToDoList.css'
import { TodoContext } from "../context/TodoContext";
import Button from '../shared/Button';
import { ACTIONS } from "../reducer/TodoReducer";
import { HiOutlineTrash } from 'react-icons/hi';
import Search from '../shared/Search'

const ToDoList = () => {
  const {todos,dispatch} = useContext(TodoContext)
  const [filterTodos, setFilteredTodos] = useState([])

  const [searchInput,setSearchInput] = useState('')

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  useEffect(()=>{
    let newTodos = todos.filter((t)=>t.title.toLowerCase().startsWith(searchInput.toLowerCase()));
    setFilteredTodos(newTodos);
},[searchInput, todos])
  return (
    <div>
      <h2>To Do List</h2>
      <Search searchInput={searchInput}
                onChange={handleSearchChange}
                 ></Search>
      <div className='todo-list'>
      <ul>
        {filterTodos.map((item) => (
          <li
            key={item.id}
          >
            <div className='todo-item'>
              <input
                className='checkbox'
                type='checkbox'
                onClick={() =>
                  dispatch({
                    type: ACTIONS.TOGGLE,
                    payload: {
                      id: item.id,
                    },
                  })
                }
              />
              <p className='checkbox-title'>
                {item.title}
              </p>
            </div>
            <div className='todo-item'>
              <Button  inverse='inverse' size='small'>
                View
              </Button>
              <Button
              danger='danger'
                size='small'
                onClick={() =>
                  dispatch({
                    type: ACTIONS.REMOVE,
                    payload: {
                      id: item.id,
                    },
                  })
                }
              >
                <HiOutlineTrash/>                  
                
              </Button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}
export default ToDoList;
