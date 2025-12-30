//위에서 아래로
$(function(){
    let current = 0;
    let banner = $('#wrap ul li');

    setInterval(function(){
        let prev = banner.eq(current);
        move(prev, 0, '100%');
        current++;

        if(current==banner.length){
            current = 0;
        }
        
        let next = banner.eq(current);
        move(next, '-100%', 0);
    }, 3000)

    function move(tg, start, end){
        tg.css('top', start).stop().animate({top:end}, 500)
    }
})


$(function(){
    let current = 0;
    let banner = $('#wrap2 ul li');

    setInterval(function(){
        let prev = banner.eq(current);
        move(prev, 0, '-100%');
        current++;

        if(current==banner.length){
            current = 0;
        }
        
        let next = banner.eq(current);
        move(next, '100%', 0);
    }, 3000)

    function move(tg, start, end){
        tg.css('top', start).stop().animate({top:end}, 500)
    }
})  //아래에서 위로


$(function(){
    let current = 0;
    let banner = $('#wrap3 ul li');

    setInterval(function(){
        let prev = banner.eq(current);
        move(prev, 0, '-100%');
        current++;

        if(current==banner.length){
            current = 0;
        }
        
        let next = banner.eq(current);
        move(next, '100%', 0);
    }, 3000)

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end}, 500)
    }
})  //왼쪽으로


$(function(){
    let current = 0;
    let banner = $('#wrap4 ul li');

    setInterval(function(){
        let prev = banner.eq(current);
        move(prev, 0, '100%');
        current++;

        if(current==banner.length){
            current = 0;
        }
        
        let next = banner.eq(current);
        move(next, '-100%', 0);
    }, 3000)

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end}, 500)
    }
})  //오른쪽으로