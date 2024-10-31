"use strict";
//march 7

let todoId = 1;
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("brendan");
  const template = `
    <div>
        <h1>Todo App</h1>
        <input type="text" id="todo-input"/>
        <button id="add-button">Add Items</button>
        <ul id="todo-list">
          
        </ul>
    </div>
    `;
  root.insertAdjacentHTML("beforeend", template);
  document.querySelector("#add-button").addEventListener("click", () => {
    const todoText = document.querySelector("#todo-input").value;
    const todoList = document.querySelector("#todo-list");
    todoList.insertAdjacentHTML(
      "beforeend",
      `
        <li id="todo-${todoId}"> 
            <input type="checkbox"/>
            <label>${todoText}</label>
            <button>X</button>
        </li>`
    );
    const deleteButton = todoList.querySelector(`li#todo-${todoId}>button`);
    deleteButton.addEventListener("click", (event) => {
      const findLi = event.target.parentElement;
      //const findLi=event.target;
      console.log("Element is : ",findLi);
      todoList.removeChild(findLi);
    });
    todoId++;
  });
});