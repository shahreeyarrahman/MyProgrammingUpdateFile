let headerBtnEffect = document.querySelector(".headerBtn");
headerBtnEffect.addEventListener("click", function(){
    headerBtnEffect.classList.toggle("active");
})

// counter //



//  START CARD BLOG SLIDER //  
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        stagePadding: 10,
        margin: 30,
        nav: true,
        navText : [
            '<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>',
            '<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'
        ],
        autoplay: true,                 // Enable auto-slide
        autoplayTimeout: 3000,          // Delay in milliseconds (3000 ms = 3 seconds)
        autoplayHoverPause: true,       // Pause on hover
        responsive:{
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
});
//  END  CARD BLOG SLIDER //  

