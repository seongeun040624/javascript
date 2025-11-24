let heading=document.querySelector("#heading")
    heading.onclick=function(){
        heading.style.color="red"
}

// alert(1+1) 알림 팝업창 형식
/* let name=confirm("정말 배경 이미지를 바꾸시겠습니까?"); */

let name=prompt("이름을 지어주세요", "아무개")
console.log(name)

