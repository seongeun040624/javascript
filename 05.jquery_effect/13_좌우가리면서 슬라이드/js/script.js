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

        pagenation.removeClass('on');
        pagenation.eq(next).addClass('on');
    }

    $('.page, .btn>a, .pagenation>a').hover(function(){
        clearInterval(timer)
    }, function(){
        timer = setInterval(slideWidth, 2000)
    });

    nextBtn.click(slideWidth);
    prevBtn.click(function(){
        if(current < 0) current=2;

        let prev = current -1;
        if(current < 0) prev=3;

        page.eq(current).css({zIndex: 0, width: '100%'}).addClass('right');
        page.eq(current).children('img').addClass('right');
        page.eq(current).stop().animate({width: '0%'}, 1500);

        page.eq(prev).css({zIndex: 1, width: 0}).removeClass('right');
        page.eq(prev).children('img').removeClass('right');
        page.eq(prev).stop().animate({width: '100%'}, 1500);

        current--;

        pagenation.removeClass('on');
        pagenation.eq(prev).addClass('on');
    });

    pagenation.click(function(){
        let tg = $(this).index();
        
        if(current > tg){
            page.eq(current).css('zIndex', 0).removeClass('right');
            page.eq(current).children('img').removeClass('right');
            page.eq(current).stop().animate({width: '0%'}, 1500);

            page.eq(tg).css('zIndex', 1).addClass('right');
            page.eq(tg).children('img').addClass('right');
            page.eq(tg).stop().animate({width: '100%'}, 1500);

            current = tg;

            pagenation.removeClass('on');
            pagenation.eq(tg).addClass('on');
        }else if(current == tg){
            return false; //아무것도 하지 않게
        }else{
            page.eq(current).css({zIndex: 0, width: '100%'}).addClass('right');
            page.eq(current).children('img').addClass('right');
            page.eq(current).stop().animate({width: '0%'}, 1500);

            page.eq(tg).css({zIndex: 1, width: 0}).removeClass('right');
            page.eq(tg).children('img').removeClass('right');
            page.eq(tg).stop().animate({width: '100%'}, 1500);

            current = tg;

            pagenation.removeClass('on');
            pagenation.eq(tg).addClass('on');
        }

    })
});