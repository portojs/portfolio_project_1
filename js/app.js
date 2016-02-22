/**
 * Created by Peter on 22.02.2016.
 */
'use strict';

$(document).ready(function() {
  var $animatedObjects = $('.hideme'),
      dt1 = $('.book-dt-1'),
      dt2 = $('.book-dt-2'),
      dt3 = $('.book-dt-3'),
      dt4 = $('.book-dt-4'),
      dt5 = $('.book-dt-5'),
      dt6 = $('.book-dt-6'),
      dt7 = $('.book-dt-7'),
      dt1_flag = true,
      dt2_flag = true,
      dt3_flag = true,
      dt4_flag = true,
      dt5_flag = true,
      dt6_flag = true,
      dt7_flag = true;

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
        bottomOfWindow = $(window).scrollTop() + $(window).height(),
        duration = 500;
    if (dt1_flag === true) {
      if (bottomOfWindow > dt1_bottom) {
        $('.book-dt-1,.book-dt-2,.book-dt-3,.book-dt-4,.book-dt-5,.book-dt-6,.book-dt-7').each(function(index) {
          $(this).delay(index*(duration)).animate({'opacity': 1, 'left': '+=20'}, duration);
        });
        dt1_flag = false;
      }
    }
  });
});