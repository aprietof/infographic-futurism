$(document).ready(function(){
    var lastScrollTop = 0;

    /* On Scroll
    ---------------------------------------------------*/
    $(window).scroll(function(){

        var currenPosition = $(this).scrollTop();
        var nav = $('#nav');

        if(currenPosition > lastScrollTop) {
            nav.removeClass("headroom--pinned").addClass("headroom--unpinned");
        }else{
            nav.removeClass("headroom--unpinned").addClass("headroom--pinned");
        }
        
        lastScrollTop = currenPosition;
        
        if(lastScrollTop < 100) {
           nav.removeClass("headroom--unpinned").addClass("headroom--pinned"); 
        }
    
    });

});