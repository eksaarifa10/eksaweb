$(document).ready(function(){
  $(window).scroll(function(){
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
    if (this.scrollY > 300) {
      $('.scroll-up').addClass("show");
    }else{
      $('.scroll-up').removeClass("show");
    }
    
    
  })
  $('.scroll-up').click(function(){
    $('html').animate({scrollTop: 0});
  })
  $('.menu-btn').click(function(){
    $('.navbar .nav').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  })
})