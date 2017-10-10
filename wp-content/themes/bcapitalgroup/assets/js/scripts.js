var y = $(window).height();
$('.home .banner video').css('height', y + 33);
$('.home .banner').css('height', y + 33);
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
  $(".mobile-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    items: 1,
    singleItem: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-left fa-lg'></i>","<i class='fa fa-chevron-right fa-lg'></i>"],
    dots: true
  });
  $(".blog_sec_wrap").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    items: 3,
    nav: true,
    dots: false,
    navText : ["<i class='fa fa-chevron-left fa-lg'></i>","<i class='fa fa-chevron-right fa-lg'></i>"],
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
      $('.header_1 .logo img').attr('src', '/wp-content/uploads/2017/09/logo_sticky.png');
    } else {
      $('.header_1 .logo img').attr('src', '/wp-content/uploads/2017/09/logo.png');
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
          scrollTop: target.offset().top + 10
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
    $(".menu-main-top-menu-container.clearfix").addClass("menu-shrink");
    $(".logo").addClass("logo-shrink");
  } else {
    $("header.header_1.sticky").removeClass("head-shrink");
    $(".menu-main-top-menu-container.clearfix").removeClass("menu-shrink");
    $(".logo").removeClass("logo-shrink");
  }
});

$(document).ready(function(){

  //adding overlay div on team page
  $('.team-member .single-team-area').children('a').append('<div class="overlay-team"></div>');
  $('.team-member .single-team-area').children('a').attr('title',' ');
  //match team image width
    var img_width = $(".tlp-member-feature-img img").width();
    $('.tpl-social').css('width', img_width );
    $('.single-team-area .overlay-team').css('width', img_width);

  $('.porfolio_wrap a').parent('p').remove();
  $('.porfolio_wrap a > p').remove();
  $('.connect').closest('#wrapper').find('.header_1').addClass('header_1 with_out_banner');
  $('.menu-main-top-menu-container').addClass('clearfix');
  $('.load_more').click(function(){
    $(this).prev().clone().prependTo($(this));
  });
  if($("body.home").length){
    new WOW().init();
  }
  $('.email_form_field .btn_1').css('font-size', '17px').val($.parseHTML("&#xf054;")[0].data);
  $(".news_inner_menu").sticky({ topSpacing: 50, className: 'sticky', wrapperClassName: 'news_inner_menu_main' });
  $("ul.pgafu-filter").sticky({ topSpacing: 50, className: 'sticky', wrapperClassName: 'news_inner_menu_main' });
  $(".about .inner1").hover(function(){$('.cart_icon_wrap').css('background', 'url(/wp-content/uploads/2017/09/img1.png) no-repeat center center #fff')}, function(){$('.cart_icon_wrap').css('background', 'url(/wp-content/uploads/2017/09/cart_icon.png) no-repeat center center #fff')});
  $(".about .inner2").hover(function(){$('.cart_icon_wrap').css('background', 'url(/wp-content/uploads/2017/09/img2.png) no-repeat center center #fff')}, function(){$('.cart_icon_wrap').css('background', 'url(/wp-content/uploads/2017/09/cart_icon.png) no-repeat center center #fff')});
  $(".about .inner3").hover(function(){$('.cart_icon_wrap').css('background', 'url(/wp-content/uploads/2017/09/img3.png) no-repeat center center #fff')}, function(){$('.cart_icon_wrap').css('background', 'url(/wp-content/uploads/2017/09/cart_icon.png) no-repeat center center #fff')});
  $(".about .inner4").hover(function(){$('.cart_icon_wrap').css('background', 'url(/wp-content/uploads/2017/09/img4.png) no-repeat center center #fff')}, function(){$('.cart_icon_wrap').css('background', 'url(/wp-content/uploads/2017/09/cart_icon.png) no-repeat center center #fff')});
});


