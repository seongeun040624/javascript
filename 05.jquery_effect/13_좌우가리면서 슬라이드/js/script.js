$(function(){
    const page = $('.page .view');
    const prevBtn = $('.prev');
    const nextBtn = $('.next');
    const pagenation = $('.pagenation a');

    let current = 0;
    let timer; //clearInterval을 쓰기 위해 변수에 담음

    timer= setInterval(slideWidth, 2000);
    function slideWidth(){
        if(current == 3) current=0; //한 줄로 씋 때는 중괄호 생략 가능

        let next = current +1;
        if(current == 2) next=0;

        page.eq(current).css('zIndex', 0).removeClass('right');
        page.eq(current).children('img').removeClass('right');
        page.eq(current).stop().animate({width: '0%'}, 1500);

        page.eq(next).css('zIndex', 1).addClass('right');
        page.eq(next).children('img').addClass('right');
        page.eq(next).stop().animate({width: '100%'}, 1500);

        current++;
    }
})