(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict


$(document).ready(function() {
  $(document).scroll(function(event) {
    var topPos = $(this).scrollTop() + 100;
    var windowHeight = $(this).height();
    var docHeight = $(document).height();

    if (topPos >= $('#progress-1').position().top) {
      $('#progress-1 >.progress-bar').css({
          'max-width': '100%'
        })
        .attr('aria-valuenow', 100)
        .find('span.title').text('100%');
    } else if (topPos < $('#progress-1').position().top) {
      $('#progress-1 >.progress-bar').css({
          'max-width': '0%'
        })
        .attr('aria-valuenow', 0)
        .find('span.title').text('0%');
    }


    if (topPos >= $('#progress-2').position().top) {
      $('#progress-2 > .progress-bar').css({
          'max-width': '100%'
        })
        .attr('aria-valuenow', 100)
        .find('span.title').text('100%');
    } else {
      $('#progress-2 > .progress-bar').css({
          'max-width': '0%'
        })
        .attr('aria-valuenow', 0)
        .find('span.title').text('0%');
    }


    if (topPos >= $('#progress-3').position().top) {
      $('#progress-3 > .progress-bar').css({
          'max-width': '100%'
        })
        .attr('aria-valuenow', 100)
        .find('span.title').text('100%');
    } else {
      $('#progress-3 > .progress-bar').css({
          'max-width': '0%'
        })
        .attr('aria-valuenow', 0)
        .find('span.title').text('0%');
    }
  });
})