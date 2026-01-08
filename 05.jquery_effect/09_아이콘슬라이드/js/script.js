$(function(){
    $('.iconBtn').each(function(index){
        $(this).on({click:function(){

            $('.iconBtn').removeClass('addIconOn');
            $(this).addClass('addIconOn');

            $('.iconBtnOn').stop().animate({left: 118 * index + "px"}, 0, function(){
                $('.iconBtnOn').css({backgroundPosition:(-118 * index)+"px 0px", transition: ".6s"})
            });
        }});
    });
});