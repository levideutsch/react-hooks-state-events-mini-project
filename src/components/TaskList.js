import React from "react";
import Task from "./Task"


function TaskList({ categoryToDisplay, setTasks }) {

  function handleDelete(task) {

    const deleted = categoryToDisplay.filter((item) => item.text !== task)
      setTasks(deleted)
  }
 
 
  return (
    <div className="tasks">
      {console.log(categoryToDisplay)}
    {categoryToDisplay.map((task, index) => (
      <Task key={index} text={task.text} category={task.category} handleDelete={handleDelete}/>
      
     ))}
     
    </div>
  );
}

export default TaskList;
