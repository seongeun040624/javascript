$(function(){
    $('nav>ul>li').hover(function(){
        $(this).find('.sub').addClass('active');
    }, function(){
        $(this).find('.sub').removeClass('active');
    })
    $('nav>ul>li').foncusin(function(){
        $(this).find('.sub').addClass('active');
    });
    $('nav>ul>li').foncusout(function(){
        $(this).find('.sub').removeClass('active');
    })
})