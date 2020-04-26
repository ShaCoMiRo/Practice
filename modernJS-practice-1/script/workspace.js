"use strict";

let Hello = "Hello World!";
let message;
message = Hello;

// alert(Hello);
// alert(message);

//=======================<변수와 상수>
//변수 명명 규칙
//1.변수명에는 오직 문자와 숫자, 그리고 기호 $와 _만 들어갈 수 있다.
//2. 첫 글자는 숫자가 될 수 없다.

let userName;
let test123;

let $ = 1;
let _ = 2;
// alert($ + _);

// testNotUseStrick = 10;
// alert(testNotUseStrick);
// "use strict" 없이는 사용 불가능

//상수 선언 : 변숫값이 변경되지 않을 것이 확실시되면 사용.
const myBirthday = "07.12.1996";
// myBirthday = '01.01.2001'; //상수는 변경 불가능.

//대문자 상수 : 기억하기 힘든 값을 변수에 할당에 별칭으로 사용하는 관습.
const COLOR_RED = "#FF0000";
const COLOR_GREEN = "#00FF00";
const COLOR_BLUE = "#0000FF";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
// alert(color);

//과제
//변수 가지고 놀기
let admin, name;
name = "John";
admin = name;
// alert(admin);

let outPlanetName = "Earth";
let currentUserName = "John";

const BIRTHJDAY = "07.12.1996"; //생일은 절대 변하지 않으므로 대문자 상수에 적합하다.
// const age = someCode(BIRTHJDAY);    //시간의 변화에 따라 age는 변하는 값이므로, 런타임에 계산된다. 따라서 대문자 상수에 적합하지 않다.

//=======================<자료형>
//변숫값을 문자열에서 숫자로 바꿔도 에러가 발생하지 않는다.
//이처럼 자료의 타입은 있지만 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어를 '동적 타입(dynamically typed)' 언어라고 부른다.
message = "hello";
message = 123456;

//BigInt형 숫자는 자주 쓰이지 않지만, 2^53보다 크거나 작은 정수를 표현하는데 사용할 수 있다.
let bigInt = 12345678901234567890123456789012345678901234567890n;
// alert(bigInt);

let str  = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let nameFieldChecked = true;
let ageFieldChecked = false;

let inGreater = 4 > 1;
// alert(inGreater);

//과제
//문자열 따옴표 : 아래 스크립트의 결과 예측하기

//=======================<형 변환>
let value = true;
// alert(typeof value);

value = String(value);
// alert(typeof value);

//과제
//전위형과 후위형
let a = 1, b = 1;
let c = ++a;
let d = b++;

//=======================<alert, prompt, confirm을 이용한 상호작용>
// alert("Hello");

// let result = prompt("이름을 입력하세요.", undefined);
// if(result.length === 0) alert(`내용이 입력되지 않았습니다!`);
// else alert(`입력된 이름은 '${result}'입니다.`);

// let isUser = confirm("계속 진행하시겠습니까?");
// if(isUser) alert("계속 진행합니다.");
// else alert("접근이 취소되었습니다.");

//=======================<조건부 연산자 if와 ?>
// let year = prompt("자바스크립트의 \"공식\"이름은 무엇일까요?", undefined);
// if(year === 'ECMAScript') {
//     alert("정답입니다!");
// }
// else {
//     alert("모르셨나요? 정답은 ECMAScript입니다!");
// }

// let inputNum = prompt("숫자를 입력하세요.",undefined);
// if(inputNum > 0) {
//     alert(1);
// } else if(inputNum < 0) {
//     alert(-1);
// } else if(inputNum === 0) {
//     alert(0);
// }

// let result = (a + b < 4) ? '미만' : '이상'; 

// let message;
// message = (login == '직원') ? '안녕하세요.' : 
//     (login == '임원') ? '환영합니다.' :
//     (login == '') ? '로그인이 필요합니다.' :
//     '';


//=======================<논리 연산자>

// let currentUser = "John";
// let defaultUser = null;

// name = currentUser || defaultUser || "unnamed";
// alert(name);

// if(age >= 14 && age <= 90);
// if(age < 14 || age > 90);
// if(!(age >= 14 && age <= 90));

//로그인 구현하기
//프롬프트 대화상자를 이용해 간이 로그인 창을 구현해보세요.
// let adminAccountInfo = {
//     id: "Admin",
//     passwd: "TheMaster"
// };

// let confrimID = prompt("사용자의 이름을 입력해주세요.", undefined);
// if(confrimID == adminAccountInfo.id) {
//     let confrimPasswd = prompt("비밀번호:", undefined);
//     if(confrimPasswd == adminAccountInfo.passwd) {
//         alert("환영합니다!");
//     } else if(confrimPasswd == '' || confrimPasswd == null) {
//         alert("취소되었습니다.");
//     } else {
//         alert("인증에 실패하였습니다.");
//     }
// } else if(confrimID == '' || confrimID == null) {
//     alert("취소되었습니다.");
// } else {
//     alert("인증되지 않은 사용자입니다.");
// }

//사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기
// let over100;
// do {
//     over100 = prompt("100보다 큰 값을 입력하세요.", 0);
// }while(over100 <= 100 && over100);

// //소수 출력하기.
// let stockNumber = prompt("임의의 숫자를 입력하세요.", undefined);
// nextPrime:
// for(let i = 2; i < stockNumber; i++) {
//     for(let j = 2; j < i; j++) {
//         if(i % j == 0) continue nextPrime;
//     }
//     alert(i);
// }

//=======================<switch문>

//switch문을 if문으로 변환하기.
// let browser = prompt("브라우저를 입력하세요.", undefined);
// if (browser == 'Edge') alert("Edge를 사용하고 계시네요!");
// else if (browser == 'Chrome' ||
//         browser == 'FireFox' ||
//         browser == 'Safari' ||
//         browser == 'Opera') alert("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
// else alert("현재 페이지가 괜찮아 보이길 바랍니다!");

//if문을 swtich문으로 변환하기
// a = +prompt('a?', undefined);
// switch(a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }

//=======================<함수>
function showMessage() {
    alert("안녕하세요!");
    /*...함수 본문...*/
}
//showMessage();

function checkAge1(age) {
    return (age > 18) ? true : confirm("보호자의 동의를 받으셨나요?");
}
function checkAge2(age) {
    return (age > 18) || confirm("보호자의 동의를 받으셨나요?");
}

// let x =  prompt("x를 입력하세요", undefined);
// let n =  prompt("n를 입력하세요", undefined);
// function pow(x, n) {
//     return x ** n;
// }
// if (n<1) alert(`${x}는 양의 정수이어야 합니다.`)
// else alert(pow(x,n));

//=======================<함수 표현식>
let funcA = function() {
    alert("이것은 함수 표현식으로 표현한 함수입니다.");
}
//=======================<화살표 함수 기초>
let funB = () => {
    /* ...함수 내용...*/
};
//화살표 함수
// let ask = (question, yes, no) => {
//     confirm(question) ? yes() : no();
// }

// ask(
//     "동의하십니까?",
//     () => { alert("동의하셨습니다"); },
//     () => { alert("취소 버튼을 누르셨습니다."); }
// );

//=======================<기초 문법 요약>

//=======================<객체>
//변수에 객체 할당
let user1 = {
    name: "Lee",
    age: 25,
    isAdmin: true
};

//객체를 반환하는 함수
function makeUser(name, age) {
    return {
        name,
        age
    };
  }
//함수를 이용해 변수에 객체 할당
let user2 = makeUser("Jung", 25);
let user3 = makeUser("Ahn", 30);

//alert(user2["name"] + user2["age"]);

//객체 내부의 프로퍼티 존재 유무 확인
// alert(user1.name === undefined);
// alert(user1.name === null);
// alert("name" in user1);

//객체는 원시 타입과 다르게 참조에 의해 저장, 복사된다.
//객체의 내용을 복사하기 위해서는 새로운 객체를 생성한 후, 새로운 객체에 객체 프로퍼티를 복사하면 된다.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
// alert(user.name + user.surname);

//객체 내부의 프로퍼티 존재 유무 확인하기.
let schedule = {};
//  alert(isEmpty(schedule));   //true
schedule["8:30"] = "get up";
// alert(isEmpty(schedule));   //false

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//프로퍼티 합계 구하기
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for(let key in salaries) {
    sum += salaries[key];
}

// alert(sum);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiflyNumeric(menu);


//프로퍼티 값 두 배로 부풀리기
function multiflyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

//alert(menu.width + " " +menu.height + " " + menu.title);

//=======================<가비지 컬렉션>
//특정 변수나 객체에 접근하거나 참조할 방법이 모두 사라지는 경우, 가비지 컬렉터는 저장된 데이터를 삭제하고 메모리에서 제거한다.


//=======================<심볼형>
//심볼은 유일한 식별자를 만들고 싶을 때 사용.
let id = Symbol("id");
// alert(id.toString());   //심볼은 자동 형 변환되지 않으므로 직접 형 변환.
// alert(id.description);

//=======================<메서드와 'this'>
//객체는 실제 존재하는 개체를 표현하고자 할 때 생성된다.
//여기서 객체에 함수를 선언하면, 객체 프로퍼티에 함수가 할당되게 되고, 이를 메서드라고 부른다.
//메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있다.

//=======================<객체를 원시형으로 변환하기>
//객체끼리 더하거나 빼는 연산, 혹은 객체 자체를 alert()로 출력할 경우 자동 형 변환이 일어난다.
//객체는 원시값으로 변환되고, 그 후 의도한 연산이 실행된다.
//객체 자체를 이용시 string, number, default 값만 사용할 수 있다.

//=======================<'new'연산자와 생성자 함수>
//객체 리터럴 {...}로는 다루기 어려운 유사객체의 대량 생성을 위해서 new 연산자와 생성자 함수를 사용한다.
//생성자 함수는 function Object(parameter) { ... }의 꼴이다. 함수명은 대문자여야 한다.
//함수를 이용해 객체 생성시 new Object(parameter)처럼 new 연산자를 붙여 실행한다.
