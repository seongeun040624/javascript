$(function(){
    $('.slideshow').each(function(){
        let container = $(this);

        setInterval(function(){
            let imgs = container.find('img');
            let first = imgs.eq(0);
            let second = imgs.eq(1);

            //보이고 있는 애를 안보이게> fadeOut
            //안 보이고 있는 애들을 보이게> fadeIn
            first.fadeOut().appendTo(container);
            second.fadeIn();
        }, 3000)
    })
})