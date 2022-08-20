

const Todo = ({ toDo, markDone, setUpDateData, deleteTask }) => {
  return (
    <>
      {toDo && toDo.length ? "" : (<div className="not">not any task</div>)}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <div className="todo" key={task.id}>
                <div
                  className={task.status ? "todo-content done" : "todo-content"}
                >
                  <p className="number">{index + 1}</p>
                  <p className="title">{task.title}</p>
                </div>
                <div className="todo-icons">
                  <span className="done" onClick={() => markDone(task.id)}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>
                  {task.status ? null : (
                    <span
                      className="task-edited"
                      onClick={() =>
                        setUpDateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    >
                      <i class="fa-solid fa-pen"></i>
                    </span>
                  )}
                  <span
                    className="delete-task"
                    onClick={() => deleteTask(task.id)}
                  >
                    <i class="fa-solid fa-trash-can"></i>
                  </span>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default Todo;
