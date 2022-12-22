import React from "react";

function CategoryFilter({ categories, onCategoryClickChange, selectedCategory }) {




 const categoryButtons = categories.map((category, index) => {
    if (category === selectedCategory){

     return <button className="selected" onClick={onCategoryClickChange} key={index}>{category}</button>
    } else {
      return <button className="" onClick={onCategoryClickChange} key={index}>{category}</button>
    }

  })
  
  return (
    <div className="categories">
      {/* <h5></h5> */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
