$(function(){
    $('.tabSet').each(function(){
        let topDiv = $(this);
        let anchors = topDiv.find('ul.tabs a');
        let panelDivs = topDiv.find('.panel');
        let lastAnchors;
        let lastPanel;

        lastAnchors = anchors.filter('.on');
        lastPanel = $(lastAnchors.attr('href'));
        panelDivs.hide();
        lastPanel.show();

        anchors.click(function(e){
            e.preventDefault();
            let currentAnchors = $(this);
            let currentPanel = $(currentAnchors.attr('href'));
            lastAnchors.removeClass('on');
            currentAnchors.addClass('on');

            lastPanel.hide();
            currentPanel.show();

            lastAnchors = currentAnchors;
            lastPanel = currentPanel;
        })
    });
})