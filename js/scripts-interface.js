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
