"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    const addButton=document.querySelector("#add-button");
    const todoInput=document.querySelector("#todo-input");
    let todoList=document.querySelector("#todo-list");
    console.log(todoInput);
    document.addEventListener("click",()=>{
        console.log("add",todoInput.value);
    });
})

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector("#add-button");
  const todoInput = document.querySelector("#todo-input");
  let todoList = document.querySelector("#todo-list");
  console.log(todoInput);

  addButton.addEventListener("click", () => {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = todoInput.value;
    todoList.appendChild(todoItem);
  });
});