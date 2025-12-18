//할당연산자 -> 값이 계속 변경돼서 계산
let x=3;
let y=6; //선언과 동시에 값 할당 안 해도 ㄱㅊ

x+=y; //x=x+y -> x= 3+6 -> 9=3+6
console.log(x)

x-=y; //x=9-6 -> 3=9-6
console.log(x) //3

x*=y; // x=x*y -> x=3*6 -> 18
console.log(x) //18

x/=y; // x=x/y -> x=18/6 -> 3=18/6
console.log(x)



//비교연산자 내가이딴걸해야한다고?
console.log(10<6); //false
console.log(10<=6); //false
console.log(10>6); //true
console.log(10>=6); //true  or연산자

console.log(3==='3') // false 문자열이라//자료형&값이 모두 같아야 true
console.log(3=='3') // true 숫자만 봄//값이 같기 때문에 true
console.log(3!=='3') //!== 자료형&값이 같지 않다는 말->자료형&값이 다르다 -> true


//논리 연산자 or -> ||, and -> &&, not -> !
const value1=false;
const value2=4<2;

function check(){ //중괄호 > 실행함수  괄호 > 조건문
    for(let i=0; i<10; i++){
        console.log('오예')
    }
    return true;
}
console.log(`or: ${value1 || value2 || check()}`)
console.log(!value1)

//조건문
//const name='seong';
/* if(name=='seongeun'){
    console.log('나는 성은이야')
}else{
    console.log('나는 성은이 아니야')
} */

/* const name='eun';
if(name=='seong'){
    console.log('반간다 성은아') //name이 seong면
}else if(name=='sseong'){
    console.log('오랜만이아') //name이 sseong면
}else{
    console.log('다음에 또 만나') //name이 둘 중 무엇도 아니면
} */

//삼항 조건 연산자
const name='hhh'
console.log(name==='hh'? 'yes':'no')

//switch
const browser='IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('hello');
        break;
    case 'FireFox':
        console.log('ㅋㅋㅋㅋㅋㅋ');
        break;
    default:
        console.log('입력 좀 하지');
        break;
}


/* let userNumber=prompt('숫자를 입력해주세요');
console.log(userNumber)
if(userNumber !== null){
    if(parseInt(userNumber) % 3 === 0){
        alert("3의 배수입니다")
    }else{
        alert("3의 배수가 아닙니다")
    }
}else{
    alert("입력이 취소되었습니다")
} */

//반복문
let sum=0;
for(let i=1; i<=100; i++){
    sum += i; //sum 값이 누적돼서 나옴
}
console.log(`1부터 100까지 더하면 ${sum}`)

//do ~ while문
let k=3;
/* do {
    console.log(`while:${k}`);
    k--;
} while(k>0); */

//while문
while(k>0){
    console.log(`while: ${k}`);
    k--;
}