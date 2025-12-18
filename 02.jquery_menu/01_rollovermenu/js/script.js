$(function(){
    $('.menu li a').each(function(){
        let a = $(this);
        let img = a.find('img');
        let src_off = img.attr('src');
        //console.log(src_off) //each를 써서 각각 값이 다 나옴
        let src_on = src_off.replace('_off', '_on');

        a.hover(function(){ //마우스 올렸을 때
            img.attr('src', src_on) //attr 속성값?
        }, function(){ // 마우스 뗐을 때
            img.attr('src', src_off)
        });
    });
});