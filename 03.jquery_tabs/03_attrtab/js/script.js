$(function(){
    $('#springBtn').click(function(){
        $('#image img').attr({
            src: './images/spring.jpg',
            alt: '봄'
        })
    });
    $('#summerBtn').click(function(){
        $('#image img').attr({
            src: './images/summer.jpg',
            alt: '여름'
        })
    });
    $('#fallBtn').click(function(){
        $('#image img').attr({
            src: './images/fall.jpg',
            alt: '가을'
        })
    });
    $('#winterBtn').click(function(){
        $('#image img').attr({
            src: './images/winter.jpg',
            alt: '겨울'
        })
    });
})