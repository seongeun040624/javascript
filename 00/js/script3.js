function printHello(){
    console.log('hello')
}

printHello();

function log(message){
    console.log(message)
}
log('hello seongeun')
log('hello')
log('bye seongeun')
log('집에가고싶다')

function changeName(obj){
    obj.name='coder';
}
const hyun={name:'hyun'}
changeName(hyun);
console.log(hyun); //이걸 써야 콘솔 화면에서 보여주는 듯

/* function addNumber(a, b){ //함수 선언
    let sum=a+b
    alert(sum)
}
addNumber(10, 2) //호출 */

//즉시 실행 함수
(function hello(){
    console.log('오늘도 고생이 너무 많아요');
})();

//화살표 함수
/* const add=function(x, y){
    return x+y
} */
/* const add=(x, y) =>{
    return x+y
} */ 
const add=(x, y) => x+y //위 주석 건 함수들이랑 같은 말