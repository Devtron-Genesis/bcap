$(function() {
  $("li:first-child").addClass("first");
  $("li:last-child").addClass("last");
  $('.sf-menu').superfish({
    delay: 500,
    animation: { opacity: 'show', height: 'show' },
    speed: 'fast',
    autoArrows: false,
    dropShadows: false,
  });
  $('.collapse').on('shown.bs.collapse', function() {
    jQuery(this).parent().find(".panel-heading").addClass("active");
  }).on('hidden.bs.collapse', function() {
    $(this).parent().find(".panel-heading").removeClass("active");
  });
  $("#home_banner > ul").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    items: 1,
    singleItem: true,
    nav: true,
    dots: false
  });
  $(".testimonial_slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    items: 1,
    singleItem: true,
    nav: false,
    dots: true
  });
  $(".blog_sec_wrap").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    items: 3,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1 //Mobile
      },
      991: {
        items: 3 // @media (min-width: 768px) and (max-width: 991px)
      },
      768: {
        items: 2 //Ipad
      },
      500: {
        items: 2 //Mobile
      }
    }
  });
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function() {
      backToTop();
    });
    $('#back-to-top').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }
  $(".header_1").sticky({ topSpacing: 0, className: 'sticky', wrapperClassName: 'header_1_main' });
  $(".mobile_header").sticky({ topSpacing: 0, className: 'sticky', wrapperClassName: 'mobile_header_main' });
  $(window).scroll(function() {
    if ($("header").hasClass("sticky")) {
      $('.header_1 .logo img').attr('src', 'http://dev.responsiveidea.com/b_capital_html/assets/images/logo_sticky.png');
    } else {
      $('.header_1 .logo img').attr('src', 'http://dev.responsiveidea.com/b_capital_html/assets/images/logo.png');
    }
  });
  $(".side_menu_toogle").click(function(e) {
    $('.side_menu_toogle').toggleClass("active");
    if ($('.side_menu_toogle').hasClass('active')) {
      $('body').css({ 'overflow': 'hidden' });
    } else {
      $('body').css({ 'overflow': 'inherit' });
    }
    $('.mobile_menu').slideToggle();
  });
  $(".mobile_menu").click(function(e) {
    e.stopPropagation();
  });
  $(".mobile_menu > ul > li > a").click(function(e) {
    var dd = $(this).next("ul");
    $(dd).slideToggle(250);
    $(".mobile_menu > ul ul").not(dd).slideUp(250);
  });
  $(".mobile_menu > ul > li > ul > li.menu-item-has-children > a").click(function(e) {
    e.preventDefault();
    //$(this).find('ul.sub-menu').slideToggle(250);
    $(this).next().slideToggle(250);
  });
  var headheight = $('.header_1').height();
  // var headheight2 = $('.header_1 ').height();
  $('#hash_menu li a').on('click', (function(e) {
    e.preventDefault();
    $("body, html").animate({
      scrollTop: $($(this).attr('href')).offset().top - 119
    }, 600);
  }));
  $('#hash_menu li').on('click', (function() {
    $('#hash_menu li').removeClass('active');
    $(this).addClass('active');
  }));
  $('.banner a[href*="#"]:not([href="#"])').click(function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 95
        }, 1000);
        e.preventDefault();
      }
    }
  });
});
// MENU SHRINK
$(document).on("scroll", function() {
  if ($(document).scrollTop() > 0) {
    $("header.header_1.sticky").addClass("head-shrink");
    $(".main_menu_wrap.clearfix").addClass("menu-shrink");
    $(".logo").addClass("logo-shrink");
  } else {
    $("header.header_1.sticky").removeClass("head-shrink");
    $(".main_menu_wrap.clearfix").removeClass("menu-shrink");
    $(".logo").removeClass("logo-shrink");
  }
});
$(document).ready(function(){

// Create a clone of the menu, right next to original.
$('ul#hash_menu').addClass('original').clone().insertAfter('ul#hash_menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


});

function stickIt() {
  // if(!($('.home').length[0])){
  //   alert('sdsdf');
    var orgElementPos = $('.original').offset();
    orgElementTop = orgElementPos.top;               

    if ($(window).scrollTop() >= (orgElementTop)) {
      // scrolled past the original position; now only show the cloned, sticky element.

      // Cloned element should always have same left position and width as original element.     
      orgElement = $('.original');
      coordsOrgElement = orgElement.offset();
      leftOrgElement = coordsOrgElement.left;  
      widthOrgElement = orgElement.css('width');
      $('.cloned').css('left',leftOrgElement+'px').css('top',50).css('width',widthOrgElement).show();
      $('.original').css('visibility','hidden');
    } else {
      // not scrolled past the menu; only show the original menu.
      $('.cloned').hide();
      $('.original').css('visibility','visible');
    }
   }


function toggler(divId) {
    $("#" + divId).toggle();
}