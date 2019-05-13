$('a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    console.log("id:",id)
    console.log("targetOffset:",targetOffset);

    $('html, body').animate({
        scrollTop: targetOffset
    }, 900);
})

// Slides Overview
$('.slides').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    centerPadding: 90,
    adaptiveHeight: true,
});
