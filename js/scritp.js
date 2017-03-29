$(document).ready(function(){

  /* On Scroll
  ---------------------------------------------------*/
  $(window).scroll(function(){
    var currenPosition = $(this).scrollTop();
    var nav = $('#nav');
    var triggerPosition = 100;

    if(currenPosition > triggerPosition) {
        nav.removeClass("headroom--pinned").addClass("headroom--unpinned");
    }else{
        nav.removeClass("headroom--unpinned").addClass("headroom--pinned");
    }
  });

});