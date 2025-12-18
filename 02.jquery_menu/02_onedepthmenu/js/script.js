$(function(){
    let menu = $('#nav>li');
    menu.hover(function(){
        let tg = $(this); //li 중 사용자가 선택한 li를 target에 대입
        let onImg = tg.find('.text_image>.on');
        let offImg = tg.find('.text_image>.off');
        let menuImage = tg.find('.menu_image');
        let imageHeight = menuImage.find('img').innerHeight();

        onImg.css('display', 'block');
        offImg.css('display', 'none');
        menuImage.stop().animate({height: imageHeight}, 500);
    }, function(){
        let tg = $(this); //li 중 사용자가 선택한 li를 target에 대입
        let onImg = tg.find('.text_image>.on');
        let offImg = tg.find('.text_image>.off');
        let menuImage = tg.find('.menu_image');
        let imageHeight = menuImage.find('img').innerHeight();

        onImg.css('display', 'none');
        offImg.css('display', 'block');
        menuImage.stop().animate({height: '0'}, 500);
    })
})