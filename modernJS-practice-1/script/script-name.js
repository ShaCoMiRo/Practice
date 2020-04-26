let questionUserName = prompt(`이름을 입력해 주세요.`, undefined);
if(questionUserName.length === 0) alert(`이름이 입력되지 않았습니다!`);
else alert(questionUserName);