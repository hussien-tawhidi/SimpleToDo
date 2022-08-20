import React from "react";

const UpdateTask = ({
  upDateData,
  updateTask,
  concelUpdate,
  newTask,
  setNewTask,
  addTask,
  changeTask
}) => {
  return (
    <>
      {upDateData && upDateData ? (
        <div className="update-task">
          <input
            type="text"
            placeholder="update task"
            value={upDateData && upDateData.title}
            onChange={(e) => changeTask(e)}
          />
          <button type="submit" onClick={updateTask}>
            update
          </button>
          <button className="concel" onClick={concelUpdate}>
            concel
          </button>
        </div>
      ) : (
        // {/* add tast */}
        <div className="add-task">
          <input
            type="text"
            placeholder="add task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>add</button>
        </div>
      )}
    </>
  );
};

export default UpdateTask;
