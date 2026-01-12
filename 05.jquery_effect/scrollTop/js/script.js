let sct2Top = $('.section2').offset().top; //900
let sct3Top = $('.section3').offset().top; //1800

$(window).scroll(function(){
    let sct = $(window).scrollTop();
    console.log(sct)
    if(sct >= sct2Top -300){
        $('.section2 .left').stop().animate({left:0}, 500);
        $('.section2 .right').stop().delay(300).animate({right:0}, 500);
    }else{
        $('.section2 .left').stop().animate({left:"-50%"}, 500);
        $('.section2 .right').stop().delay(300).animate({right:'-50%'}, 500);
    }
})

$(window).scroll(function(){
    let sec = $(window).scrollTop();
    if(sec >= sct3Top -200){
        $('.section3 .leftBox').stop().animate({opacity:1}, 500)
        $('.section3 .rightBox').stop().delay(300).animate({opacity:1}, 500)
    }else{
        $('.section3 .leftBox').stop().animate({opacity:0}, 500)
        $('.section3 .rightBox').stop().delay(300).animate({opacity:.1}, 500)
    }
})