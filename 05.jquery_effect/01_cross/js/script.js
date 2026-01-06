$(function(){
    $('.box>div>div').css('opacity', 0);

    $('.box>div').hover(function(){
        let th = $(this);
        let wX1 = th.find('.x1');
        let wX2 = th.find('.x2');
        let hX1 = th.find('.y1');
        let hX2 = th.find('.y2');

        wX1.css('opacity', 0.2).stop().animate({height: 0}, 500);
        wX2.css('opacity', 0.2).stop().animate({height: 0}, 500);
        hX1.css('opacity', 0.2).stop().animate({width: 0}, 500);
        hX2.css('opacity', 0.2).stop().animate({width: 0}, 500);
    }, function(){
        let th = $(this);
        let wX1 = th.find('.x1');
        let wX2 = th.find('.x2');
        let hX1 = th.find('.y1');
        let hX2 = th.find('.y2');

        wX1.stop().animate({height: '50%', opacity: 0}, 500);
        wX2.stop().animate({height: '50%', opacity: 0}, 500);
        hX2.stop().animate({width: '50%', opacity: 0}, 500);
        hX1.stop().animate({width: '50%', opacity: 0}, 500);
    });
})