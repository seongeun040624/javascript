/* $(function(){
    $('.slideshow').each(function(){
        let container = $(this);
        let timer; //선언만 먼저

        function slides(){
            let anchors = container.find('a');
            let first = anchors.eq(0);
            let second = anchors.eq(1);

            first.fadeOut().appendTo(container);
            second.fadeIn();
        }

        function startTimer(){
            timer = setInterval(slides, 3000)
        }
        function stopTimer(){
            clearInterval(timer)
        }
        container.find('a').hover(stopTimer, startTimer);
        startTimer();
    });
    
}); */

/* $(function(){
    $('.slideshow').each(function(){
        let container=$(this);
        let timer;
         
        function slides(){
            let anchors=container.find('a');
            let first=anchors.eq(0);
            let second=anchors.eq(1);
            first.fadeOut().appendTo(container);
            second.fadeIn();
        }

        function startTimer(){
            timer=setInterval( slides,3000)
        }
        function stopTimer(){
            clearInterval(timer)
        }
        container.find('a').hover( stopTimer,startTimer)
       startTimer()
    });
    
}); */

//자바스크립트
document.addEventListener('DOMContentLoaded', () => {
    const slideshows = document.querySelectorAll('.slideshow');

    slideshows.forEach((container) => {
        let timer;

        const slides = () => {
            const anchors = container.querySelectorAll('a');
            const first = anchors[0];
            const second = anchors[1];

            // 1. 첫 번째 이미지 페이드 아웃 및 뒤로 이동
            first.style.opacity = '0';
            
            // 트랜지션 완료 후 DOM 위치 변경 (jQuery의 fadeOut 시간 고려)
            setTimeout(() => {
                container.appendChild(first);
               /*  first.style.opacity = '1';  */// 다음 차례를 위해 투명도 복구
            }, 600); // CSS transition 시간과 맞춥니다.

            // 2. 두 번째 이미지 페이드 인
            if (second) {
                second.style.opacity = '1';
            }
        };

        const startTimer = () => {
            timer = setInterval(slides, 3000);
        };

        const stopTimer = () => {
            clearInterval(timer);
        };

        // 이벤트 리스너 등록 (호버 시 정지/재개)
        container.addEventListener('mouseenter', stopTimer);
        container.addEventListener('mouseleave', startTimer);

        startTimer();
    });
});
