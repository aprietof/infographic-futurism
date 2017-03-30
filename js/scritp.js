// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#nav').outerHeight();

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){
        $('#nav').removeClass("headroom--pinned").addClass("headroom--unpinned");
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('#nav').removeClass("headroom--unpinned").addClass("headroom--pinned");
        }
    }

    lastScrollTop = st;
}


$(document).ready(function(){
    
    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
})

