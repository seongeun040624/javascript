/* $(function(){
    const progressbar = $('.progressBar .bar');
    const progressWrap = $('.progressBar');
    const progressNum = $('.progressBar .num');

    let progressText = progressNum.attr('data-num');

    progressbar.animate({width : progressText + "%"}, 1000);

    //progressNum.animateNumber({number: progressText}, 1000);

    function textAni(){
        let currentWidth = progressbar.width() / progressWrap.width() * 100;
        progressNum.text(Math.ceil(currentWidth) + '%');
    }
    setInterval(textAni, 30);
}) */

//혼자한 거
/* $(function(){
    $('.progressBar').each(function(){
        const progressWrap = $(this); //$('.progressBar');
        const progressbar = progressWrap.find('.bar');//$(this).find('.bar');
        const progressNum = progressWrap.find('.num');//$(this).find('.num');

        let progressText = progressNum.attr('data-num');

        progressbar.animate({width : progressText + "%"}, 1000);

        function textAni(){
        let currentWidth = progressbar.width() / progressWrap.width() * 100;
        progressNum.text(Math.ceil(currentWidth) + '%');
    }
    setInterval(textAni, 30);
    })
}) */


$(function(){
    $('.progressBar').each(function(){
        const progressWrap=$(this);
        const progressBar=progressWrap.find('.bar');
        const progressNum=progressWrap.find('.num');
        let progressText=progressNum.attr('data-num');
        progressBar.animate({width:progressText + '%'},1000);

        function textAin(){
            let currentWidth=progressBar.width() /progressWrap.width() * 100;
            /* console.log(currentWidth) */
            progressNum.text(Math.ceil(currentWidth)+'%')
        }
        let interval=setInterval(textAin,50)
    });

});