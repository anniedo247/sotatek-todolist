import "./App.css";
import AddToDo from "./components/UI/AddToDo";
import ToDoList from "./components/UI/ToDoList";
import { TodoProvider } from "../src/components/context/TodoContext";

function App() {
  return (
    <div className="App">
      <container className="main-container">
        <TodoProvider>
          <div className="main-container__item left">
            <AddToDo />
          </div>
          <div className="main-container__item right">
            <ToDoList />
          </div>
        </TodoProvider>
      </container>
    </div>
  );
}

export default App;
