"use strict";

// March 1
document.addEventListener("DOMContentLoaded",()=>{
    const root=document.querySelector("brendan");
    const template=`
    <div>
    <h1>Todo App</h1>
    <input id="todo-input" type="text"/>
    <button id="add-button">Add Items</button>
    <ul id="todo-list">
    <li>Sample Todo</li>
    </ul>
    </div>
    `;

    root.insertAdjacentHTML("beforeend",template);
    document.querySelector("#add-button")
    .addEventListener("click",()=>{
        document.querySelector("#todo-list")
        .insertAdjacentHTML("beforeend",
        `
        <li>
        ${document.querySelector("#todo-input").value}
        </li>
        `);
    });
});