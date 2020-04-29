"use strict"

const greetingForm = document.querySelector(".js-greetingFrom"),
    greetingInput = greetingForm.querySelector(".js-nameInput"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",  //최근 사용자의 이름을 가리키는 변수명
    SHOWING_CN = "showing"; //showing 클래스명

//이름저장
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

//제출이벤트
function handleSubmit(event) {
    //form의 제출 이벤트 기본 동작을 제한.
    event.preventDefault();
    
    //input(버튼)의 값을 변수에 할당.
    const currentValue = greetingInput.value;

    //이름출력 호출.
    //새로고침 전까지는 이름이 즉시 출력되지 않아서 사용.
    paintGreeting(currentValue);
    //이름저장
    saveName(currentValue);
}

//이름출력
function paintGreeting(text) {
    greetingForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//이름질문
function askForName() {
    greetingForm.classList.add(SHOWING_CN);
    //제출 시 제출이벤트 발생
    greetingForm.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        //유저가 없는 경우
        //이름질문
        askForName();
    } else {
        //유저가 았는 경우
        //로컬저장소 이름출력
        paintGreeting(currentUser);
    }
}

//실질적인 기능을 가진 init() 정의
function init() {
    //이름을 가져오는 함수 loadName() 호출
    loadName();
}

//최종적으로 정의된 init() 호출
init();