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
      ss1 = $('.book-ss-1'),
      ss2 = $('.book-ss-2'),
      ss3 = $('.book-ss-3'),
      ss4 = $('.book-ss-4'),
      ss5 = $('.book-ss-5'),
      ss6 = $('.book-ss-6'),
      ss7 = $('.book-ss-7'),
      ss8 = $('.book-ss-8'),
      ss9 = $('.book-ss-9'),
      ss10 = $('.book-ss-10'),
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

  /* Responsive design as per window resize */
  $(window).resize(function() {
    console.log($(window).width());
    if ($(window).width() > 1182) {
      console.log('shoot!');
      if (!dt1_flag) {
        dt1.css('left', 30);
        dt2.css('left', 90);
        dt3.css('left', 150);
        dt4.css('left', 210);
        dt5.css('left', 270);
        dt6.css('left', 330);
        dt7.css('left', 390);
      }
      if (!ss1_flag) {
        ss1.css('left', 30);
        ss2.css('left', 65);
        ss3.css('left', 105);
        ss4.css('left', 145);
        ss5.css('left', 185);
        ss6.css('left', 225);
        ss7.css('left', 265);
        ss8.css('left', 305);
        ss9.css('left', 345);
        ss10.css('left', 385);
      }
    }
    if ($(window).width() < 1182) {
      if (!dt1_flag) {
        dt1.css('left', 30);
        dt2.css('left', 75);
        dt3.css('left', 120);
        dt4.css('left', 165);
        dt5.css('left', 210);
        dt6.css('left', 255);
        dt7.css('left', 300);
      }
      if (!ss1_flag) {
        ss1.css('left', 30);
        ss2.css('left', 60);
        ss3.css('left', 90);
        ss4.css('left', 120);
        ss5.css('left', 150);
        ss6.css('left', 180);
        ss7.css('left', 210);
        ss8.css('left', 240);
        ss9.css('left', 270);
        ss10.css('left', 300);
      }
    }
  });
});