import TodoList from "./Components/TodoList";
import "./Styles/MainStyle.scss"
function App() {
  return (
    <div className="app">
      <h2>Todo Lists (Reactjs)</h2>
      {/* <i class="fa-solid fa-circle-check"></i>
      <i class="fa-solid fa-pen"></i>
      <i class="fa-solid fa-trash-can"></i> */}
      <TodoList/>
    </div>
  );
}

export default App;
