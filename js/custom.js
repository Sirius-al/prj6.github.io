$(function () {
    /* carousel js */
    $('.carousel').carousel({
        interval: 3000
    });

    /* venobox js */
    $('.venobox').venobox();

    $('.service_slide').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            576: {
                items: 2,
               
            },
            768: {
                items: 3,

            },
            1000: {
                items: 3,
            }
        }
    });
    
    
    $('.test_slide').slick({
      dots: false,
        arrows:false,
     speed: 300,
     slidesToShow: 2,
     slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll:1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
})