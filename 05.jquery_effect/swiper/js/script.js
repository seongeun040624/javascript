var swiper = new Swiper(".mySwiper1", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    pagination: {
      el: ".swiper-pagination-sw",
      type: "fraction",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next-sw",
      prevEl: ".swiper-button-prev-sw",
    },
  });


let sControl = true; //1은 true, 0은 false

$('.swiper-button-pause').click(function(){
  if(sControl == true){
    $(this).attr({class: 'swiper-button-play'});
     swiper2.autoplay.stop();

    sControl = false;
  }else{
    $(this).attr({class: 'swiper-button-pause'});
    swiper2.autoplay.start();

    sControl = true;
  }
});


$('.looptransition .swiper').each(function(index){
  let swiper3 = new Swiper(this, {
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    speed: 5000,
    freeMode: true,
    freeModeMomentum: false,
    loopedSlides: 0,
    loopAdditionalSlides: 0,
    slidesPerView: 5
    
  });
})