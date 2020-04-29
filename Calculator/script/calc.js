"use strict";

const display = document.querySelector(".js-display"),
    result = document.querySelector(".js-result");

function handleAllClear() {
    display.value = "";
    result.value = "";
}

function handleAddChar(char) {
    display.value = display.value + char;
}

function handleResult() {
    event.preventDefault();
    result.value = eval(display.value);
}