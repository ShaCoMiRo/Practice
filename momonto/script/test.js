"use strict";

console.log('I\'m Workng. I\'m JS. I\'m Beautiful. I\'m worth it');

const info = 'constnat variable';
const a = 211;
const b = a - 5;
console.log(`a: ${a}, b: ${b}`);
console.log(info);

//Array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek);
console.log(daysOfWeek[2]);

//Object
const SunghyunInfo = {
    name: "Sunghyun",
    age: 25,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Fury", "Avengers"],
    favFood: [
        {
        name: "Hamburger",
        fatty: true
        },
        {
            name: "ramen",
            fatty: true
        }],
    
    introduce() {
        console.log("Hi! I'm Sunghyun Lee. Nice to see you!");
    },

    introduce2: function() {
        console.log("Hi! I'm Sunghyun Lee. Nice to see you!");
    }
};

console.log(SunghyunInfo);
SunghyunInfo.introduce();

function sayHello(name, age) {
    //console.log(`hi, ${name}. You are ${age} years of age.`);

    //함수의 리턴값을 undefined에서 다른 값으로 바꾸기.
    return `hi, ${name}. You are ${age} years of age.`;
}

sayHello("Sunghyun", 25);
//함수를 변수에 할당
//리턴값이 있다면 해당 값을 변수가 가지게 된다.
const greetSunghyun = sayHello("Sunghyun", 25);

//greetSunghyun은 console.log를 실행하므로, 리턴값이 존재하지 않아 undefined를 반환한다.
//리턴값을 가지는 변수가 되면, 가지고 있는 값을 로그로 출력한다.
console.log(greetSunghyun);

const calculater = {
    plus: function(x, y) {
        return x + y;
    },
    minus: function(x, y) {
        return x - y;
    },
    multifly: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    },
    powerOf: function(x, y) {
        return x ** y;
    }
}

const add = calculater.plus(10, 5);
const min = calculater.minus(10, 5);
const mul = calculater.multifly(10, 5);
const div = calculater.divide(10, 5);
const pow = calculater.powerOf(10, 5);

console.log(`add: ${add}, min: ${min}, mul: ${mul}, div: ${div}, pow: ${pow}`);


/////////////////////DOM PRACTICE/////////////////////////
const idTitle = document.getElementById("title");
const selTitle = document.querySelector("#title");

// console.log(idTitle);
// console.log(selTitle);

// DOM, Document Object Module (DOM; 돔; 문서 객체 모델)
// https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C 참고

// idTitle.innerHTML = "<u>Hi! From JS</u>";
// idTitle.style.color = "red";
// console.dir(idTitle);

document.title = "title by JS"

//찾게 될 모든 객체들의 함수들을 DOM 형태로 변경이 가능하다.
//페이지 상에서 자바스크립트로 선택한 것은 객체가 된다.

// function handleResize() {
//     console.log();
// }

//웹페이지 윈도우 창 크기의 변경 이벤트를 리슨한 후, 리스너 함수를 실행.
// window.addEventListener("resize", handleResize); 

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8C8D"

function handleClick() {
    // title.style.color = "blue";
    const currentColor = selTitle.style.color;

    if(currentColor === BASE_COLOR) {
        selTitle.style.color = OTHER_COLOR;
    } else {
        selTitle.style.color = BASE_COLOR;
    }
    console.log(selTitle.style.color); 
}

function initClickEvent() {
    selTitle.style.color = BASE_COLOR;
    selTitle.addEventListener("click", handleClick);
}

function initMouseEnterEvent() {
    selTitle.style.color = BASE_COLOR;
    selTitle.addEventListener("mouseenter", handleClick);
}

initClickEvent();
initMouseEnterEvent();


function handleOffline() {
    console.log("Network Offline. Good bye.");
}

function handleOnline() {
    console.log("Network Online. Wellcome back!")
}

//네트워크 상태에 따라서 변화.
window.addEventListener("online", handleOffline); 
window.addEventListener("onlune", handleOnline);

