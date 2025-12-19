/* $(function(){
    $('nav>ul').hover(function(){
        $(this).addClass('active');
    }, function(){
        $(this).removeClass('active');
    })
}); */


$(function(){
    $('nav>ul').hover(function(){
       // $(this).addClass('active')
       $(this).stop().animate({height:210},300)
    },function(){
        //$(this).removeClass('active')
         $(this).stop().animate({height:40},300)
    });

    $('nav>ul').focusin(function(){
         $(this).stop().animate({height:210},300)
    });
    $('nav>ul').focusout(function(){
        $(this).stop().animate({height:40},300)
    });
});