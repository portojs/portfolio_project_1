/**
 * Created by Peter on 22.02.2016.
 */
'use strict';

$(document).ready(function() {
  var $animatedObjects = $('.hideme'),
      duration = 500,
      dtCollection = $('.book-dt-1,.book-dt-2,.book-dt-3,.book-dt-4,.book-dt-5,.book-dt-6,.book-dt-7'),
      ssCollection = $('.book-ss-1,.book-ss-2,.book-ss-3,.book-ss-4,.book-ss-5,.book-ss-6,.book-ss-7,.book-ss-8,.book-ss-9,.book-ss-10'),
      dt1_flag = true,
      ss1_flag = true;

  // Function for animating picture collections
  var animate = function(collection) {
    collection.each(function(index) {
      $(this).delay(index*(duration)).animate({'opacity': 1, 'left': '+=20'}, duration);
    });
  };

  // Function for changing picture collections position on window.resize
  var changePosition = function(collection, countValue) {
    var count = 30;
    collection.each(function() {
      $(this).css('left', count);
      count += countValue;
    });
  };

  /* Every time the window is scrolled */
  $(window).scroll(function() {

    if ($(window).width() > 991) {
      /* Check location of each animated element */
      $animatedObjects.each(function() {
        var bottomOfObject = $(this).offset().top + $(this).outerHeight();
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        /* If object is completely visible, fade it in */
        if (bottomOfWindow > bottomOfObject) {
          $(this).animate({'opacity': 1, 'left': 0}, 500);
        }
      });
      /* Animation  for Dark Tower Books */
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
  });

  /* Every time the window is resized */
  $(window).resize(function() {
    console.log($(window).width());
    if ($(window).width() > 1182) {
      if (!dt1_flag) {
        changePosition(dtCollection, 60);
      }
      if (!ss1_flag) {
        changePosition(ssCollection, 40);
      }
    } else {
      if (!dt1_flag) {
        changePosition(dtCollection, 45);
      }
      if (!ss1_flag) {
        changePosition(ssCollection, 30);
      }
    }
  });
});