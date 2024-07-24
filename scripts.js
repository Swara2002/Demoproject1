$(document).ready(function() {
    // Page Loader
    $(window).on('load', function() {
        $('#page-loader').fadeOut('fast');
    });

    // Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    // Lazy Load Images
    $('.lazy').lazy();

    $('.faq-question').click(function() {
        var answer = $(this).next('.faq-answer');
        answer.slideToggle();
        $(this).find('.toggle-symbol').text(answer.is(':visible') ? '-' : '+');
    });

});

 
  // Smooth scrolling for internal links
$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    var target = $(this.getAttribute('href'));

    if(target.length) {
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});






  

