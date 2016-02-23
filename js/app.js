/**
 * Created by Peter on 22.02.2016.
 */
'use strict';

$(document).ready(function() {
  var $animatedObjects = $('.hideme'),
      dt1 = $('.book-dt-1'),
      ss1 = $('.book-ss-1'),
      dt1_flag = true,
      ss1_flag = true;

  /* Every time the window is scrolled */
  $(window).scroll(function() {
    /* Check location of each animated element */
    $animatedObjects.each(function() {
      var bottomOfObject = $(this).offset().top + $(this).outerHeight();
      var bottomOfWindow = $(window).scrollTop() + $(window).height();
      /* If object is completely visible, fade it in */
      if (bottomOfWindow > bottomOfObject) {
        $(this).animate({'opacity': 1, 'left': 0}, 500);
      }
    });
    /* Animation sequence for Dark Tower Books */
    var dt1_bottom = dt1.offset().top + dt1.outerHeight(),
        ss1_bottom = ss1.offset().top + ss1.outerHeight(),
        bottomOfWindow = $(window).scrollTop() + $(window).height(),
        duration = 800;
    if (dt1_flag) {
      if (bottomOfWindow > dt1_bottom) {
        $('.book-dt-1,.book-dt-2,.book-dt-3,.book-dt-4,.book-dt-5,.book-dt-6,.book-dt-7').each(function(index) {
          $(this).delay(index*(duration)).animate({'opacity': 1, 'left': '+=20'}, duration);
        });
        dt1_flag = false;
      }
    }
    if (ss1_flag) {
      if (bottomOfWindow > ss1_bottom) {
        $('.book-ss-1,.book-ss-2,.book-ss-3,.book-ss-4,.book-ss-5,.book-ss-6,.book-ss-7,.book-ss-8,.book-ss-9,.book-ss-10').each(function(index) {
          $(this).delay(index*(duration)).animate({'opacity': 1, 'left': '+=20'}, duration);
        });
        ss1_flag = false;
      }
    }
  });
});