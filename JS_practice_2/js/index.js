//DOM 이벤트1. 버튼 클릭시 출력되는 텍스트 변경하기.
//카운터 만들기.
let number = document.getElementById("number");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");

console.log(number.innerText);  //내용
console.log(increase.offsetTop);  //top 위치
console.log(decrease.id);  //id

increase.onclick = function() {
  console.log("increase가 클릭됨"); //increase 버튼 클릭 인식.
  let current = parseInt(number.innerText, 10);
    //10진수로 숫자를 받아오겠다는 선언.
  number.innerText = current + 1; //받아온 10진수에 1을 더한 후 number에 출력.
}

decrease.onclick = function() {
  console.log("decrease가 클릭됨");
  let current = parseInt(number.innerText, 10);
  if(number.innerText <= 0) {
    alert("0 이하로는 숫자를 줄일 수 없습니다!");
  } else { 
    number.innerText = current - 1;
  } 
}