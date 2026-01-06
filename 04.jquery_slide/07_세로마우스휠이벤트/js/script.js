$(function(){
    $('.section').each(function(index){
        $(this).on('wheel', function(e){ //whell event의 의미
            e.preventDefault();

            const delta = e.originalEvent.deltaY;
            console.log(delta);
            const $htmlBody = $('html, body');

            if(delta > 0){
                //아래로 스크롤하면 100이라는 값이 나옴
                if(index < $('.section').length -1){
                    const nextTop = $(this).next().offset().top;
                    $htmlBody.stop().animate({scrollTop: nextTop}, 500)
                }
            }else{
                if(index > 0){
                    const prevTop = $(this).prev().offset().top;
                    $htmlBody.stop().animate({scrollTop: prevTop}, 500)
                }
            }
        })
    })
})