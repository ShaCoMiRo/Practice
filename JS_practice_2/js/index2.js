// import "../css/style.css";

//모달 만들기.
//모달 : 기존의 내용을 가리고 나타나는 메시지 박스의 형태의 UI.
let open = document.getElementById("open");
let close = document.getElementById("close")
let modal = document.querySelector(".modal-wrapper");
//또는
//let modal = document.getElementsByClassName(".modal-wrapper")

open.onclick = function() {
  modal.style.display = "flex";
}

close.onclick = function() {
  modal.style.display = "none"
}