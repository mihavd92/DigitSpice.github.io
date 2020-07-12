$(function () {

  /* Slider */

  $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: 1000,
    dots: false,
    infinite: true
    
  });

  $('.procedures__cards').slick({
    /*  infinite: true, */
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: 2000,
    responsive: [
    {
      breakpoint: 1028,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  /* Fixed Scroll */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;

    $("#menu__link").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 700);
  });

  /* Nav Toggle Active */
  $("#nav li").click(function (e) {
    e.preventDefault();
    $("#nav li").removeClass("active");
    $(this).closest("li").addClass("active");
  });
  
  
  $("#burger").click(function (e) {
    e.preventDefault();
    $("#menu").toggleClass("active");
  });
  
  
  $("#menu").on("click", function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
    $("#burger").toggleClass("active");
  });
  
  




  /* Menu Fix*/

  var header = $("#header"),
    topNav = $("#top-nav"),
    introH = $("#header").innerHeight(),
    scrollOffset = $(window).scrollTop();



  checkScroll(scrollOffset);

  $(window).on("scroll", function () {

    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) {

    if (scrollOffset >= introH) {
      topNav.addClass("fix");
    } else {
      topNav.removeClass("fix");
    }
  }

});