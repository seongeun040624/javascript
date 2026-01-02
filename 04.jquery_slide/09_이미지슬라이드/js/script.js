/* $(function(){
    const slideList = $('.slideImg>ul>li');
    const $prev = $('.arrowBtn .prev');
    const $next = $('.arrowBtn .next');
    const control = $('.controlBtn>ul>li');

    let current = 0;
    let setIntervalId;

    slideMove(); //hoisting
    function slideMove(){
        setIntervalId = setInterval(function(){
            let prev = slideList.eq(current); //eq(0) 1번 li

            let prevBtn = control.eq(current);

            move(prev, 0, '-100%'); //선택자(prev)가, 시작이 0에서, 마지막-100%로 움직임

            prevBtn.removeClass('on');

            current++; //li 1씩 증가
            if(current==slideList.length){ //만약 current 값이 slideList의 개수와 같다면
                current=0; //current 값을 다시 0으로 만듦
            } // 설정하지 않으면 current 값이 계속 증가함

            let next = slideList.eq(current);

            let nextBtn = control.eq(current);
            nextBtn.addClass('on');

            move(next, '100%', 0);

        }, 2000)
    }
    function move(tg, start, end){ //매개변수 a, b, c
        tg.css('left', start).stop().animate({left:end}, 500)
        //선택자(tg)의 left (값)에서 시작해서, left (값)에서 끝냄, 애니메이션은 .5초 동안 실행
    }


    $('.slide').on({mouseover:function(){ //그룹 method
        clearInterval(setIntervalId);
    }, mouseout:function(){
        slideMove()
    }});


    $next.on('click', function(){
        let prev = slideList.eq(current);
        let prevBtn = control.eq(current);
        move(prev, 0, '-100%');
        prevBtn.removeClass('on');
        current++;
        if(current==slideList.length){
            current=0;
        }

        let next = slideList.eq(current);
        let nextBtn = control.eq(current);
        nextBtn.addClass('on');
        move(next, '100%', 0);
    });

    $prev.on('click', function(){
        let prev = slideList.eq(current);
        let prevBtn = control.eq(current);
        move(prev, 0, '100%');
        prevBtn.removeClass('on');
        current--;
        if(current == -slideList.length){
            current=0;
        }

        let next = slideList.eq(current);
        let nextBtn = control.eq(current);
        nextBtn.addClass('on');
        move(next, '-100%', 0);
    });

    control.on('click', function(){
        let tg = $(this);
        let i = tg.index();
        control.removeClass('on');
        tg.addClass('on'); // 클릭햇을 때 변경만 되고 움직이진 않음

        if(current > i){
            controlMove2(i);
        }else{
            controlMove(i);
        }
    });
    
    function controlMove(i){
        if(current==i){return}

        let currentEl = slideList.eq(current);
        let nextEl = slideList.eq(i);

        currentEl.css('left', 0).stop().animate({left: '-100%'}, 500);
        nextEl.css('left', '100%').stop().animate({left: 0}, 500);

        current = i;
    }
    function controlMove2(i){
        if(current==i){return}

        let currentEl = slideList.eq(current);
        let nextEl = slideList.eq(i);

        currentEl.css('left', 0).stop().animate({left: '100%'}, 500);
        nextEl.css('left', '-100%').stop().animate({left: 0}, 500);

        current = i;
    }
}); */