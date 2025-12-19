$(function(){
    $('nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });


     $('nav>ul>li').focusin(function(){ //tab 눌렀을 때 2depth도 선택되게
        $(this).find('ul').stop().slideDown();
     });
     $('nav>ul>li').focusout(function(){ //2depth를 다 보고 나면 사라지게
        $(this).find('ul').stop().slideUp();
     });
});