'use strict';

$(document).ready(function() {
  var carouselSnippet = '<div class="container sk-carousel"><div id="carousel-sk" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carousel-sk" data-slide-to="0" class="active"></li><li data-target="#carousel-sk" data-slide-to="1"></li><li data-target="#carousel-sk" data-slide-to="2"></li></ol><div class="carousel-inner" role="listbox"><div class="item active"><img class="carousel-image" src="http://gdurl.com/eMWX" alt="Photo of Stephen King by Esquire"></div><div class="item"><img class="carousel-image" src="http://gdurl.com/3DIH" alt="Photo of Stephen King by New Yorker"></div><div class="item"><img class="carousel-image" src="http://gdurl.com/8Gyz" alt="Photo of Stephen King in his study"></div></div><a class="left carousel-control" href="#carousel-sk" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#carousel-sk" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div></div>';
  var staticSnippet = '<div class="container sk-carousel"><div id="carousel-sk" class="carousel slide" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img class="carousel-image" src="http://gdurl.com/eMWX" alt="Photo of Stephen King by Esquire"></div>';
  var $animatedObjects = $('.hideme'),
    duration = 500,
    dtCollection = $('.book-dt-1,.book-dt-2,.book-dt-3,.book-dt-4,.book-dt-5,.book-dt-6,.book-dt-7'),
    ssCollection = $('.book-ss-1,.book-ss-2,.book-ss-3,.book-ss-4,.book-ss-5,.book-ss-6,.book-ss-7,.book-ss-8,.book-ss-9,.book-ss-10'),
    dt1_flag = true,
    ss1_flag = true,
    playedAnimations = [],
    userAgent = window.navigator.userAgent.toLowerCase(),
    ios = /ipad/.test(userAgent);

  // Function to animate picture collections
  var animate = function(collection) {
    collection.each(function(index) {
      $(this).delay(index * (duration)).animate({
        'opacity': 1,
        'left': '+=20'
      }, duration);
    });
  };

  var animateApple = function(collection) {
    collection.each(function() {
      $(this).css({
        'opacity': 1,
        'left': '+=20'
      });
    });
  };


  // Function to change picture collections position on window.resize
  var changePosition = function(collection, countValue) {
    var count = 30;
    collection.each(function() {
      $(this).css('left', count);
      count += countValue;
    });
  };

  // Function to check animations status
  var checkAnimations = function(animations) {
    animations.each(function() {
      if (playedAnimations.indexOf($(this)) < 0) {
        return true;
      }
    });
    return false;
  };

  /* Every time the window is scrolled */
  function Scroll() {
    /* Check if all animations already played */
    if (checkAnimations($animatedObjects) || dt1_flag || ss1_flag) {

      if ($(window).width() > 970) {
        /* Check location of each animated element */
        $animatedObjects.each(function() {
          var book = $(this);
          var bottomOfObject = book.offset().top + book.outerHeight();
          var bottomOfWindow = $(window).scrollTop() + $(window).height();
          /* If object is completely visible, fade it in */
          if (bottomOfWindow > bottomOfObject) {
            book.delay(duration).animate({
              'opacity': 1,
              'left': 0
            });
            playedAnimations.push(book);
          }
        });
        /* Animation for Dark Tower and Short Story Books */
        var dt1_bottom = $(dtCollection[0]).offset().top + $(dtCollection[0]).outerHeight(),
          ss1_bottom = $(ssCollection[0]).offset().top + $(ssCollection[0]).outerHeight(),
          bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (dt1_flag) {
          if (bottomOfWindow > dt1_bottom) {
            animate(dtCollection);
            dt1_flag = false;
          }
        }
        if (ss1_flag) {
          if (bottomOfWindow > ss1_bottom) {
            animate(ssCollection);
            ss1_flag = false;
          }
        }
      }
    } else {
      $(window).unbind('scroll');
    }
  };

  if (!ios) {
    $(".carousel-check").html(carouselSnippet);
    document.addEventListener("scroll", Scroll);
    document.addEventListener("touchmove", Scroll);
  } else {
    $(".carousel-check").html(staticSnippet);
    $animatedObjects.each(function() {
      $(this).css({'opacity': 1, 'left': 0});
    });
    animateApple(dtCollection);
    animateApple(ssCollection);
  }

  /* Every time the window is resized */
  $(window).resize(function() {
    if ($(window).width() > 1182) {
      if (!dt1_flag) {
        changePosition(dtCollection, 60);
      }
      if (!ss1_flag) {
        changePosition(ssCollection, 40);
      }
    } else {
      if ($(window).width() > 970) {
        if (!dt1_flag) {
          changePosition(dtCollection, 45);
        }
        if (!ss1_flag) {
          changePosition(ssCollection, 30);
        }
      }
    }
  });

});

