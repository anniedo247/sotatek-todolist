import React, {useContext} from 'react';
import './ToDoList.css'
import { TodoContext } from "../context/TodoContext";
import Button from '../shared/Button';
import { ACTIONS } from "../reducer/TodoReducer";
import { HiOutlineTrash } from 'react-icons/hi';
import Search from '../shared/Search'

const ToDoList = () => {
  const {todos,dispatch} = useContext(TodoContext)

  return (
    <div>
      <h2>To Do List</h2>
      <Search></Search>
      <div className='todo-list'>
      <ul>
        {todos.map((item) => (
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

export default ToDoList
