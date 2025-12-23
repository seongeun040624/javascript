$(function(){
    $('.tabSet').each(function(){
        let topDiv = $(this);
        let anchors = topDiv.find('ul.tabs a');
        let panelDivs = topDiv.find('.panel');
        let lastAnchors;  //보이고 있는 버튼
        let lastPanel; //보이고 잇는 내용?

        lastAnchors = anchors.filter('.on'); //활성화된 a태그를 찾아
        lastPanel = $(lastAnchors.attr('href')); //a에 찾은 href같인 아이디 패널 01값
        panelDivs.hide();// 모든 패널 숨기기
        lastPanel.show();//아이디 패널 01 보이기

        anchors.click(function(e){ //선택한 a태그 클릭하면
            e.preventDefault(); //기본 기능 차단
            let currentAnchors = $(this);
            let currentPanel = $(currentAnchors.attr('href'));
            lastAnchors.removeClass('on'); //기존탭의 활성화는 없애고
            currentAnchors.addClass('on'); //선택된 탭의 활성화

            lastPanel.hide();
            currentPanel.show();

            lastAnchors = currentAnchors;
            lastPanel = currentPanel;
        })
    });
})