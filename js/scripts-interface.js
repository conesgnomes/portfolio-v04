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

$(document).ready(function () {
  var scroll_pos = 0;
  $(".page-section-one").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0'});
  $(".page-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0'});
  $(".page-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0'});
  $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 1210 && scroll_pos < 2308) {
        $(".page-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0'});
        $(".page-section-two").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0'});
        $(".page-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0'});
      } else if (scroll_pos > 2307 && scroll_pos ) {
        $(".page-section-one").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0'});
        $(".page-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0'});
        $(".page-section-three").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0'});
      } else {
        $(".page-section-one").css({'background-color': '#1C2124', 'padding': '15px', 'border-radius': '4px', 'color': '#ffffff', 'margin-top': '0'});
        $(".page-section-two").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0'});
        $(".page-section-three").css({'background-color': '#ffffff', 'padding': '15px', 'border-radius': '4px', 'color': '#1C2124', 'margin-top': '0'});
      }
      console.log(scroll_pos);
  });
});
