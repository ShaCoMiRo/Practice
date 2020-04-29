"use strict"

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector(".js-toDoInput"),
    toDoList = document.querySelector(".js-toDoList");

const TO_DOS_LS = "toDos";
let toDos = [];

//할일 등록
function handleSubmit(event) {
    //기본 이벤트 처리 삭제
    event.preventDefault();

    //입력된 할일 값을 읽어들여 변수에 저장
    const currentValue = toDoInput.value;

    //할일 값을 이용해 할일 출력
    paintToDo(currentValue);
    toDoInput.value = "";
}

//할일 삭제
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    //이벤트가 발생한 버튼이 속한 할일 제거
    toDoList.removeChild(li);

    //변화된 할일 목록이 기존 할일 목록과 다른 경우 새로운 배열 생성
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    //새롭게 바뀐 할일목록 배열로 갱신, 이후 로컬저장소에 저장
    toDos = cleanToDos;
    saveToDos();
}

//할일 출력
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("sapn");
    const newId = toDos.length + 1;

    delBtn.innerText = "X";
    //삭제 버튼 클릭 이벤트 발생 시, 할일 삭제 실행
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    //할일 추가
    toDoList.appendChild(li);

    const toDoOjb = {
        text: text,
        id: newId
    }
    
    //할일목록 배열에 객체를 추가
    toDos.push(toDoOjb);
    //핢일목록 저장
    saveToDos();
}

//할일목록 저장
function saveToDos() {
    //할일목록 배열을 JSON으로 string화 하여 로컬저장소 변수에 저장.
    localStorage.setItem(TO_DOS_LS, JSON.stringify(toDos));
}

//할일 불러오기
function loadToDos() {
    //로컬저장소에 저장된 할일목록을 변수에 할당
    const loadedToDos = localStorage.getItem(TO_DOS_LS);

    if(loadedToDos !== null) {
        //할 일이 있는 경우
        //JSON : JavaScript Object Notation의 준말
        //데이터 전달 시, 다룰 수 있도록 객체<->스트링 형태로 변환
        const parsedToDos = JSON.parse(loadedToDos);
        //여기에서는 string을 object로 변환
        
        //변환된 할일목록 배열의 각 내용이 가진 text를 출력
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    //기존에 저장된 할일 불러오기
    loadToDos();
    //새로운 할일 입력 이벤트 발생 시, 할일 등록 실행
    toDoForm.addEventListener("submit", handleSubmit);
}

init();