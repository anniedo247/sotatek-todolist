
import './App.css';
import AddToDo from './components/UI/AddToDo';
import ToDoList from './components/UI/ToDoList'

function App() {
  return (
    <div className="App">
      <container className = "main-container">
      <div className="main-container__item left"><AddToDo/></div>
      <div className="main-container__item right"><ToDoList/></div> 
      </container>
      
    </div>
  );
}

export default App;
