import { useState } from "react";
import Todo from "./Todo";
import UpdateTask from "./UpdateTask";

const TodoList = () => {
  const [toDo, setTodo] = useState([
    { id: 2, title: "studying web designing", status: false },
    { id: 1, title: "searching about programming", status: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const [upDateData, setUpDateData] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setTodo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setTodo(newTask);
  };

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(newTask);
  };

  const concelUpdate = () => {
    setUpDateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: upDateData.id,
      title: e.target.value,
      status: upDateData.status ? true : false,
    };
    setUpDateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== upDateData.id);
    let updateobject = [...filterRecords, upDateData];
    setTodo(updateobject);
    setUpDateData("");
  };

  return (
    <div className="todo-list">
      
      {/* update task */}
      <UpdateTask
        updateTask={updateTask}
        upDateData={upDateData}
        concelUpdate={concelUpdate}
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        changeTask={changeTask}
      />

      {/* display to do */}
      <Todo
        toDo={toDo}
        markDone={markDone}
        setUpDateData={setUpDateData}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TodoList;
