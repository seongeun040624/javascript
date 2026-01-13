$(function(){
    let box = $('.storiesBody>div');
    let col1 = 0;
    let col2 = 1;
    let col3 = 2;
    let col4 = 3;
    let timer;
    let prevBtn = $('.prev');
    let nextBtn = $('.next');

    prevBtn.click(function(){
        box.eq(col4).stop().css({transform:'scale('+0.8+')', zIndex:0}).animate({left:'50%', top:0, opacity:.1, marginLeft:'-11%'},1000);
        box.eq(col3).stop().css({transform:'scale('+0.9+')', zIndex:0}).animate({left:'10%', top:50, opacity:.5, marginLeft:0},1000);
        box.eq(col2).stop().css({transform:'scale('+1+')', zIndex:1}).animate({left:'50%', top:120, opacity:1, marginLeft:'-11%'},1000);
        box.eq(col1).stop().css({transform:'scale('+0.9+')', zIndex:0}).animate({left:'68%', top:50, opacity:.5, marginLeft:0},1000);

        col1++; col2++; col3++; col4++;
        if(col1 > 3) col1= 0;
        if(col2 > 3) col2= 0;
        if(col3 > 3) col3= 0;
        if(col4 > 3) col4= 0;
    });
    nextBtn.click(function(){
        box.eq(col1).stop().css({transform:'scale('+0.9+')', zIndex:0}).animate({left:'10%', top: 50, opacity:.5, marginLeft:0},1000);
        box.eq(col2).stop().css({transform:'scale('+0.8+')', zIndex:0}).animate({left:'50%', top: 0, opacity:.1, marginLeft:'-11%'},1000);
        box.eq(col3).stop().css({transform:'scale('+0.9+')', zIndex:0}).animate({left:'68%', top:50, opacity:.5, marginLeft:0},1000);
        box.eq(col4).stop().css({transform:'scale('+1+')', zIndex:1}).animate({left:'50%', top:120, opacity:1, marginLeft:'-11%'},1000);
        
        col1--; col2--; col3--; col4--;
        if(col1 < 0) col1= 3;
        if(col2 < 0) col2= 3;
        if(col3 < 0) col3= 3;
        if(col4 < 0) col4= 3;
    });


    function events(){
        box.eq(col1).stop().css({transform:'scale('+0.9+')', zIndex:0}).animate({left:'10%', top: 50, opacity:.5, marginLeft:0},1000);
        box.eq(col2).stop().css({transform:'scale('+0.8+')', zIndex:0}).animate({left:'50%', top: 0, opacity:.1, marginLeft:'-11%'},1000);
        box.eq(col3).stop().css({transform:'scale('+0.9+')', zIndex:0}).animate({left:'68%', top:50, opacity:.5, marginLeft:0},1000);
        box.eq(col4).stop().css({transform:'scale('+1+')', zIndex:1}).animate({left:'50%', top:120, opacity:1, marginLeft:'-11%'},1000);
        
        col1--; col2--; col3--; col4--;
        if(col1 < 0) col1= 3;
        if(col2 < 0) col2= 3;
        if(col3 < 0) col3= 3;
        if(col4 < 0) col4= 3;
    }
    timer = setInterval(events, 2500);

    box.hover(function(){clearInterval(timer)}, function(){timer = setInterval(events, 2500);});
    prevBtn.hover(function(){clearInterval(timer)}, function(){timer = setInterval(events, 2500);});
    nextBtn.hover(function(){clearInterval(timer)}, function(){timer = setInterval(events, 2500);});
    
});