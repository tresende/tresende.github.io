$(document).ready(function () {
    $('#silvio-santos').addClass("walk");
    $('#silvio-santos').on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {
        console.log($('.silvio-santos').length);
    });
    // var animationDuration = 5;
    // setTimeout(function () {
    //     $('#silvio-santos').removeClass("walk");
    //     $('audio').remove();
    // }, animationDuration * 1000);
});