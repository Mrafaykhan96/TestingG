"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    const root=document.querySelector("brendan");
    const template=`
    <div>
        <h1>Todo App</h1>
        <input type="text" id="todo-input"/>
        <button id="add-button">Add Items</button>
        <ul id="todo-list">

        </ul>
    </div>
    `;
    root.insertAdjacentHTML("beforeend",template);
    document.querySelector("#add-button")
    .addEventListener("click",()=>{
        const todoText=document.querySelector("#todo-input").value;
        const todoList=document.querySelector("#todo-list");
        todoList.insertAdjacentHTML("beforeend",
        `
        <li>
            <input type="checkbox"/>
            <label>${todoText}</label>
            <button>X</button>
        </li>`);
    });
});