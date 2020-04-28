"use strict"

const idTitle = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    idTitle.classList.toggle(CLICKED_CLASS);

    // // const currentClass = idTitle.className;
    // const hasClass = idTitle.classList.contains(CLICKED_CLASS);

    // if(hasClass) {
    //     idTitle.classList.remove(CLICKED_CLASS);
    //     // idTitle.className = "";
    // } else {
    //     idTitle.classList.add(CLICKED_CLASS);
    //     // idTitle.className = CLICKED_CLASS;
    // }
}

function init() {
    idTitle.addEventListener("click", handleClick);
}

init();