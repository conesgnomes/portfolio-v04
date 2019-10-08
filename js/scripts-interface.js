$(window).scroll(function(){

  if ($(window).width() <= 759 && $('body').hasClass("index")) {
    if ($(window).scrollTop() >= 60) {
      $('.navigation').addClass('fixed-mobile');
      $('.title').fadeOut(90);
    }
    else {
      $('.navigation').removeClass('fixed-mobile');
      $('.title').fadeIn(90);
    }
  }
  if ($(window).width() >= 760 && $(window).width() <= 999 && $('body').hasClass("index")) {
    if ($(window).scrollTop() >= 19) {
      $('.navigation').addClass('fixed-tablet');
      $('.title').fadeOut(90);
    }
    else {
      $('.navigation').removeClass('fixed-tablet');
      $('.title').fadeIn(90);
    }
  }
  if ($(window).width() >= 1000 && $(window).width() <= 1199 && $('body').hasClass("index")) {
    if ($(window).scrollTop() >= 38) {
      $('.navigation').addClass('fixed-desktop');
      $('.title').fadeOut(90);
    }
    else {
      $('.navigation').removeClass('fixed-desktop');
      $('.title').fadeIn(90);
    }
  }
  if ($(window).width() >= 1200 && $('body').hasClass("index")) {
    if ($(window).scrollTop() >= 40) {
      $('.navigation').addClass('fixed-desktop');
      $('.title').fadeOut(90);
    }
    else {
      $('.navigation').removeClass('fixed-desktop');
      $('.title').fadeIn(90);
    }
  }

  // Fixed header for all subpages

  if ($(window).width() <= 759 && $('body').hasClass("subpage")) {
    if ($(window).scrollTop() >= 30) {
      $('.navigation').addClass('fixed-mobile-sub');
    }
    else {
      $('.navigation').removeClass('fixed-mobile-sub');
    }
  }
  if ($(window).width() >= 760 && $(window).width() <= 999 && $('body').hasClass("subpage")) {
    if ($(window).scrollTop() >= 19) {
      $('.navigation').addClass('fixed-tablet-sub');
    }
    else {
      $('.navigation').removeClass('fixed-tablet-sub');
    }
  }
  if ($(window).width() >= 1000 && $(window).width() <= 1199 && $('body').hasClass("subpage")) {
    if ($(window).scrollTop() >= 37) {
      $('.navigation').addClass('fixed-desktop-sub');
    }
    else {
      $('.navigation').removeClass('fixed-desktop-sub');
    }
  }
  if ($(window).width() >= 1200 && $('body').hasClass("subpage")) {
    if ($(window).scrollTop() >= 41) {
      $('.navigation').addClass('fixed-desktop-sub');
    }
    else {
      $('.navigation').removeClass('fixed-desktop-sub');
    }
  }
});

// Change background color of project nav on scrollTop

// Adcetris.com

$(document).ready(function () {
  var scroll_pos = 0;
  $(".lymph-section-one").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
  $(".lymph-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(".lymph-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 1130 && scroll_pos < 6942) {
        $(".lymph-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".lymph-section-two").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0' , 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".lymph-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      } else if (scroll_pos > 6940) {
        $(".lymph-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".lymph-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".lymph-section-three").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
      } else {
        $(".lymph-section-one").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".lymph-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".lymph-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      }
      console.log(scroll_pos);
  });
});

// Giant Design System

$(document).ready(function () {
  var scroll_pos = 0;
  $(".gds-section-one").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
  $(".gds-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(".gds-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 1917 && scroll_pos < 4442) {
        $(".gds-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".gds-section-two").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0' , 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".gds-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      } else if (scroll_pos > 4440) {
        $(".gds-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".gds-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".gds-section-three").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
      } else {
        $(".gds-section-one").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".gds-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".gds-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      }
      console.log(scroll_pos);
  });
});

// Booth Lake Landing

$(document).ready(function () {
  var scroll_pos = 0;
  $(".booth-section-one").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
  $(".booth-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(".booth-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 1807 && scroll_pos < 4742) {
        $(".booth-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".booth-section-two").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0' , 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".booth-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      } else if (scroll_pos > 4740) {
        $(".booth-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".booth-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".booth-section-three").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
      } else {
        $(".booth-section-one").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".booth-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".booth-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      }
      console.log(scroll_pos);
  });
});

// Daily UI

$(document).ready(function () {
  var scroll_pos = 0;
  $(".ui-section-one").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
  $(".ui-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(".ui-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(".ui-section-four").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(".ui-section-five").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(".ui-section-six").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(".ui-section-seven").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(".ui-section-eight").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(".ui-section-nine").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
  $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 910 && scroll_pos < 962) {
        $(".ui-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-two").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0' , 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".ui-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-four").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-five").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-six").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-seven").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-eight").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-nine").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      } else if (scroll_pos > 930 && scroll_pos < 1512) {
        $(".ui-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-two").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0' , 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".ui-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-four").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-five").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-six").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-seven").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-eight").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-nine").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      } else if (scroll_pos > 1510 && scroll_pos < 2092) {
        $(".ui-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-three").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".ui-section-four").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-five").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-six").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-seven").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-eight").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-nine").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      } else if (scroll_pos > 2090 && scroll_pos < 2602) {
        $(".ui-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-four").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".ui-section-five").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-six").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-seven").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-eight").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-nine").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      } else if (scroll_pos > 2600 && scroll_pos < 3112) {
        $(".ui-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-four").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-five").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".ui-section-six").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-seven").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-eight").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-nine").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      } else if (scroll_pos > 3110 && scroll_pos < 3622) {
        $(".ui-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-four").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-five").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-six").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".ui-section-seven").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-eight").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-nine").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      } else if (scroll_pos > 3620 && scroll_pos < 4132) {
        $(".ui-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-four").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-five").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-six").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-seven").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".ui-section-eight").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-nine").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      } else if (scroll_pos > 4130 && scroll_pos < 4642) {
        $(".ui-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-four").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-five").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-six").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-seven").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-eight").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".ui-section-nine").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      } else if (scroll_pos > 4640 && scroll_pos < 5510) {
        $(".ui-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-four").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-five").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-six").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-seven").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-eight").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-nine").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
      } else {
        $(".ui-section-one").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0', 'box-shadow': '0px 0px 30px rgba(0,0,0,50)', 'z-index': '100'});
        $(".ui-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-four").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-five").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-six").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-seven").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-eight").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
        $(".ui-section-nine").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0', 'box-shadow': 'none', 'z-index': '-100'});
      }
      console.log(scroll_pos);
  });
});

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme1').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight() - 50;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1', 'bottom':'0'},500);
            }
        });
        $('.hideme2').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight() - 50;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
});
