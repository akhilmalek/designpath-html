$(document).ready(function () {
  // start js
  $('[data-nav="open"]').click(function () {
    $("#mySidenav2").addClass("width-menu");
    $("#cd-shadow-layer").css("display", "flex");
    $("body").css("position", "relative");
    $("body").css("overflow", "hidden");
    $("body").css("height", "100vh");
    // $(".position-fixed-overlay").addClass("position-show");
    $(".closebtn2").css("position", "fixed");
  });
  $('[data-nav="close"]').click(function () {
    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");
  });


  AOS.init({
    offset: 120,
    duration: 1500,
    easing: 'ease',
    once: true,
  });

  // header on scroll
  var headertopoption = $(window);
  var headTop = $(".navbar-dark");
  headertopoption.on("scroll", function () {
    if (headertopoption.scrollTop() > 100) {
      headTop.addClass("fixed-top slideInDown animated");
    } else {
      headTop.removeClass("fixed-top slideInDown animated");
    }
  });
  // wow
  var wow = new WOW({
    mobile: false,
  }).init();
  /// smooth scroll
  $(".smoth-scroll").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 70,
        },
        1500
      );
    e.preventDefault();
  });
  // menu click
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
  // nav link
  $(".nav-link").click(function () {
    $(".navbar-collapse").removeClass("show");
    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");
  });
  // readmore
  $("#toggle-read").click(function () {
    var elem = $("#toggle-read").text();
    if (elem === "Read More...") {
      $("#toggle-read").text("Read Less");
      $("#text_hide_show").show();
    } else {
      $("#toggle-read").text("Read More...");
      $("#text_hide_show").hide();
    }
  });
  // owl-carosel
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 20,
    smartSpeed: 1000,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
      },
      1025: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });
  // nav toggle
  $(".nav-toggle").click(function () {
    $(".nav-toggle").removeClass("active");
    $(".nav-toggle").parent().removeClass("active");
    $(this).addClass("active");
    $(this).parent().addClass("active");
  });
  // top sctoll
  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    // declare variable
    var topPos = $(this).scrollTop();
    // if user scrolls down - show scroll to top button

    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });
  // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
    return false;
  });

});
