$(function(){
    $('.type').typed({
    strings: ['2시간 지났어요', '2시간 후 식사시간'],
    typeSpeed: 60,     // 타이핑 속도
    backSpeed: 40,     // 지우는 속도
    backDelay: 1000,   // 다 쓴 후 대기시간
    loop: true         // 반복 여부
    });
})