import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, itemSetter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputFilterValue, setInputFilterValue] = useState("")
  const [newItemName, setNewItemName] = useState("")
  const [newItemCategoryValue, setNewItemCategoryValue] = useState("Produce")

  function handleInputFilterChange(value) {
    setInputFilterValue(value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleNewItemNameChange(newItemNameValue) {
    setNewItemName(newItemNameValue)
    console.log(newItemNameValue)
  }

  function handleNewItemCategoryChange(newItemCategory) {
    setNewItemCategoryValue(newItemCategory)
    console.log(newItemCategory)
  }

  function handleItemFormSubmit(e) {
    e.preventDefault()
    const newArray = [...items,{id: (items[items.length-1].id+1), name: newItemName, category: newItemCategoryValue}]
    itemSetter(newArray)
  }


  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const itemsFilteredByName = itemsToDisplay.filter(item => {
    if (inputFilterValue === "") {
      return item} else {
    return item.name.toLowerCase().includes(inputFilterValue.toLowerCase()) }})

  return (
    <div className="ShoppingList">
      <ItemForm newItemNameChange={handleNewItemNameChange} newItemCategoryNameChange={handleNewItemCategoryChange} onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onSearchChange={handleInputFilterChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsFilteredByName.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
