$(function(){
    let imgWidth = $('.sliderImg img').width();
    //console.log(imgWidth)
    
    $('.txt').css('left', -350).each(function(index){
        $(this).attr('data-index', index)
    });

    $('.sliderControl .controlBtn').each(function(index){
        $(this).attr('data-index', index)
    }).click(function(){
        let i = $(this).index();
        randomSlide(i)
    });

    function randomSlide(index){
        let willMoveLeft = -(index % 3) * imgWidth;
        let willMoveTop = Math.floor(index / 3) * -400;

        $('.sliderImg')
        .animate({left: willMoveLeft}, 500)
        .animate({top: willMoveTop}, 500);

        /* $('.control_btn[data-index='+index+']')
        .addClass('active').siblings().removeClass('active'); */
        $(`.controlBtn[data-index=${index}]`)
        .addClass('active').siblings().removeClass('active');

        $(`.txt[data-index=${index}]`)/* .show() */.animate({left: 50}, 500)
        .siblings('.txt')/* .hide() */.css('left', -350);
    };
    let i = Math.floor(Math.random()*6);
    let i1 = Math.random();
    console.log(i1)

    randomSlide(i);
})