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
    }
};

console.log(SunghyunInfo);
SunghyunInfo.introduce();