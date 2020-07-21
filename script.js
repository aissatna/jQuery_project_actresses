$(document).ready(function () {
    var $mainMenuItems = $('#main-menu ul').children('li'),
        totalMainMenuItems = $mainMenuItems.length,
        opendIndex = -1,

        init = function () {
        bindEvents();
        },
        bindEvents=function(){
            $mainMenuItems.children('.images').click(function () {
                var newIndex = $(this).parent().index(),
                    $item = $mainMenuItems.eq(newIndex);
                if (opendIndex === newIndex) {
                    animateItem($item, false, 250);
                    opendIndex = -1;
                } else {
                    if (validIndex(newIndex)){
                        animateItem($mainMenuItems.eq(opendIndex), false, 250);
                        opendIndex = newIndex;
                        animateItem($item, true, 250);

                    }
                }
            });
        },
        validIndex = function (indexToCheck) {
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems)
        },
        animateItem = function ($item, toOpen, speed) {
            var $colorImage = $item.find('.color'),
                itemParam = toOpen ? {width: '420px'} : {width: '140px'},
                colorImageParam = toOpen ? {left: '0px'} : {left: '140px'};
            $colorImage.animate(colorImageParam, speed);
            $item.animate(itemParam, speed);

        }
    ;
    init();

});