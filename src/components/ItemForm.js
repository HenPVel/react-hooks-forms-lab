import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  return (
    <form className="NewItem">
      <label>
        Name:
        <input onChange={e => props.newItemNameChange(e.target.value)} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={e => props.newItemCategoryNameChange(e.target.value)} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onClick={props.onItemFormSubmit} type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
