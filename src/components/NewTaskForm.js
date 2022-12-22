import React, { useState } from "react";

function NewTaskForm( { newCategories, onTaskFormSubmit } ) { 

  const [details, setDetails] = useState("")
  const [newCategory, setNewCategory] = useState("Code")

  function handleDetailsChange(event) {
    setDetails(event.target.value)
  }

  function handleCategoryChange(event) {
    setNewCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newItem = {
      text: details,
      category: newCategory,
    }
    onTaskFormSubmit(newItem)
  }
 

  const newCategoryOptions = newCategories.map((category, index) => {
    return <option key={index}>{category}</option>
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {newCategoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
