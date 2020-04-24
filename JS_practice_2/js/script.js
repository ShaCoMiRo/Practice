function adaddada() {
    document.getElementById("fucA").innerHTML = `<div>This is Function a</div>`;
  }
  
  function biggerThanThree(numbers) {
    let biggerNumbers = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 3) biggerNumbers.push(numbers[i]);
    }
    return biggerNumbers;
  }
  //숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환하기.
  
  const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
  
  superheroes.forEach(hero => {
    console.log(hero);
  });
  //forEach를 이용한 반복문.
  /*forEach 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어준다. 이 함수의 파라미터 hero는 각 원소를 가리키게 된다.
  이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수라고 부른다. 함수를 등록해주면, forEach가 실행해주는 것이다.*/
  
  function countBiggerThanTen(numbers) {
    return numbers.filter(n => n > 10).length;
  }
  //숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수.
  
  function max(...numbers) {
    return numbers.reduce((acc, current) => acc > current ? acc : current);
  }
  //함수에 n개의 큰 숫자들이 주어졌을 때, 그 중 가장 큰 값을 알아내기.
  
  function na() {
  
  }
  
  let na = (a=1, b=1) => {console.log(a + b);}