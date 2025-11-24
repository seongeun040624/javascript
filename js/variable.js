let width;
let height;

width=200;
height=50;
let area = width * height;
console.log(area)

//상수 선언하기; 변하면 안 되는 값
/* const width1=200; */

//상수 활용 예시 원주율=상수
/* const Pi=3.14;
let radius=prompt("반지름 값을 입력해주세요");
let area1=Pi * radius * radius;
console.log(area1) */

//템플릿 리터럴
let names="kim";
let classRoom = 204;
/* console.log(names + "지현은 오늘 " + classRoom + "오세요") */
console.log(`${names}지현은 오늘 ${classRoom}로 오세요`)

//배열
let spring ="봄";
let summer ="여름";
let fall ="가을";
let winter ="겨울"; //원시형; 하나씩 작성해야 함

let season=["봄", "여름", "가을", "겨울"] //배열; 대괄호 안에 여러 개
console.log(season[0]) //10진법 사용해서? 0~9여서 0부터 세게 됨

/* let input=prompt("숫자를 입력해주세요");
console.log(input)
console.log(typeof input)
console.log(3 * input)
console.log(Number(input)) */

//산술연산자
let x=1;
let y=7;
y += x; //y=y+x

console.log(y)