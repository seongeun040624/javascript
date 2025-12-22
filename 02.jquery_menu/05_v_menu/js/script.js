$(function(){
    /* $('.title').click(function(){
        $('.sub').hide(); //먼저 전체 숨기기한 다음
        $(this).next().show();// 내가 누른 애의 다음꺼만 보이게

    }); */

    /* $('.title').click(function(){
        $('.sub').hide();
        $(this).next().slideDown();
    }) */

    /* $('.title').click(function(){
        $(this).next().toggle();
    }) */


    $('.title').click(function(){
        let th = $(this).next();
        $('.sub').slideUp();

        // is ~하고 잇니?
        if(th.is(':visible')){ //th가 보이고 있으면
            th.slideUp() //th를 슬라이드 업 하고
        }else{ // 그게 아니면
            th.slideDown() // th를 슬라이드 다운 시키기
        }
    });
})