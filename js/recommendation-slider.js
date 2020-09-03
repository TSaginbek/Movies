$(document).ready(function(){
    $('.recommendation__slider').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow:4,
        slidesToScroll:2,
        speed:500,
        easing:'_ease_',
        infinite:false,
        pauseOnFocuse:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        responsive: [
            {
                breakpoint:1201,
                settings: {
                    arrows:false,
                },
            },
            {
                breakpoint:601,
                settings: {
                    slidesToShow:3,
                    arrows:false,
                }
            },
            {
                breakpoint:501,
                settings: {
                    slidesToShow:2,
                    arrows:false,
                }
            },
        ]
    });
});