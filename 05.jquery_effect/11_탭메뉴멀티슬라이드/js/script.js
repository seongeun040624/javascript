$(function(){
    $('.box').hover(function(){
        $('.box1').animate({top: 0}, 500);
        $('.box2').animate({top: 0}, 500);
        $('p').css('opacity', 1);
    }, function(){
        $('.box1').animate({top: '-100%'}, 500);
        $('.box2').animate({top: '100%'}, 500);
        $('p').css('opacity', 0);
    });
})