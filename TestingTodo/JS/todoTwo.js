"use strict";

//feb 29
document.addEventListener("DOMContentLoaded",()=>{
    const root=document.querySelector("app-root");
    const template= `
    <div>
    <h1> Todo App</>
    <input id="todo-input"/>
    <button id="add-button">Add Items</button>
    <ul id="todo-list>
    <li> Sample Todo</li>
    </div>
    `;
    root.insertAdjacentHTML("beforeend",template);
});

    document.querySelector("#add-button")
    .addEventListener("Click",()=>{
        document.querySelector("#todo-list")
        .insertAdjacentHTML("beforeend",
        `<li>${document.querySelector("#todo-input").value}</li>
        `);

    });