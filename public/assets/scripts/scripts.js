$( document ).ready(function(){
    //side nav
    $('#button-collapse').sideNav({
        closeOnClick: true
    });
    //parallax image background
    $('#parallax').parallax();
    //jQuery scroll animation for anchored links
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
        return false;
    });

});