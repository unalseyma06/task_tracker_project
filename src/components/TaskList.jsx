import React from "react";

function TaskList({ task, getTask }) {
  console.log(task);

  return (
    <div>
      {task.map((item) => {
        const { id, name, task, date } = item;
        return (
          <div
            key={id}
            className="mt-2 d-flex justify-content-between rounded-2 p-2 bg-secondary"
          >
            <div>
              <h4>{task} </h4>
              <p>{name} </p>
              <p>{date} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default TaskList;
