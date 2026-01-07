$(function(){
    $('.box1').hover(function(){
        $(this).stop().animate({width: 920}, 500)
    }, function(){
        $(this).stop().animate({width: 200}, 500)
    });
    $('.box2').hover(function(){
        $('.boxWrap').stop().animate({left: '-240px'}, 500)
        $(this).stop().animate({width: 920}, 500)
    }, function(){
        $('.boxWrap').stop().animate({left: 0}, 500)
        $(this).stop().animate({width: 200}, 500)
    });
    $('.box3').hover(function(){
        $('.boxWrap').stop().animate({left: '-480px'}, 500)
        $(this).stop().animate({width: 920}, 500)
    }, function(){
        $('.boxWrap').stop().animate({left: 0}, 500)
        $(this).stop().animate({width: 200}, 500)
    });
    $('.box4').hover(function(){
        $('.boxWrap').stop().animate({left: '-720px'}, 500)
        $(this).stop().animate({width: 920}, 500)
    }, function(){
        $('.boxWrap').stop().animate({left: 0}, 500)
        $(this).stop().animate({width: 200}, 500)
    });
    
});