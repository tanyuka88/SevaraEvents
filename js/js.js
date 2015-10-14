$(document).ready(function(){

    $("#owl-example").owlCarousel({
        items : 3, //3 items above 1000px browser width
        itemsDesktop : [1200,3], //3 items between 1000px and 901px
        itemsDesktopSmall : [800,2], // 2 items betweem 800px and 500px
        itemsTablet: [500,1], //1 items between 500 and 0;
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
        pagination:false,
        navigation:true,
        navigationText:[
            "<i class='icon-chevron-left icon-white'><</i>",
            "<i class='icon-chevron-right icon-white'>></i>"
        ]
    });

    if ($(window).width() > 1200 ){

        $('.animatedIcon1').mouseover(function () {
        $('.icon1').addClass('animated flip');
    });
    $('.animatedIcon1').mouseout(function () {
        $('.icon1').removeClass('animated flip');
    });

    $('.animatedIcon4').mouseover(function () {
        $('.icon4').addClass('animated rubberBand');
    });
    $('.animatedIcon4').mouseout(function () {
        $('.icon4').removeClass('animated rubberBand');
    });

    $('.animatedIcon5').mouseover(function () {
        $('.icon5').addClass('animated flipInX');
    });

    $('.animatedIcon5').mouseout(function () {
        $('.icon5').removeClass('animated flipInX');
    });

    $('.animatedIcon6').mouseover(function () {
        $('.icon6').addClass('animated bounceIn');
    });

    $('.animatedIcon6').mouseout(function () {
        $('.icon6').removeClass('animated bounceIn');
    });
    }
    else{
    }
});

