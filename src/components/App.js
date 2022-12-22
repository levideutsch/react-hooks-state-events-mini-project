import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const [newTask, setNewTask] = useState(TASKS)

  function handleNewTaskAdd(object) {
    setNewTask([...newTask, object])
  }

  function handleCategoryChange(event) {
    console.log(event.target.textContent)
    setSelectedCategory(event.target.textContent)
  }
  

  const categoryToDisplay = newTask.filter((task) => {
    if (selectedCategory === "All") return true 

    return task.category === selectedCategory
  })

 

  const newCategories = [...CATEGORIES]
  newCategories.shift()

  // console.log(newCategories)
  // console.log(CATEGORIES)





  return (
    <div className="App">
    <h2>My tasks</h2>

      
      <CategoryFilter categories={CATEGORIES} onCategoryClickChange={handleCategoryChange} selectedCategory={selectedCategory}/>
     
      
      <NewTaskForm newCategories={newCategories} onTaskFormSubmit={handleNewTaskAdd}/>
      <TaskList categoryToDisplay={categoryToDisplay} setTasks={setNewTask}/>

    </div>
  );
}

export default App;
