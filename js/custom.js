// $(window).scroll(function() {    
//   var scroll = $(window).scrollTop();   
//   if (scroll <= 50) {
//       $(".cs_header").removeClass("fixed").addClass("fixed");
//   }
// });


$(window).scroll(function(){
if ($(this).scrollTop() > 50) {
   $('.cs_header').addClass('sticky');
} else {
   $('.cs_header').removeClass('sticky');
}
});


// navbar 
$('.cstm_navbar').on('click', 'li a', function() {
  $('.cstm_navbar li.active').removeClass('active');
  $(this).parent().addClass('active').siblings().removeClass('active');

}); 

$(".menu_btn").click(function(){
  $(this).toggleClass("active");
  $(".cstm_navbar").toggleClass("active");
  $(".cstm_navbar li ").removeClass("active");
  $(".overlay_wraper").toggleClass("active");
})

$(".back_btn").on('click', function(){
  $(".cstm_navbar li ").removeClass('active');
  $(".overlay_wraper").removeClass("active");
})






//more sidebvar filter 
function myFunctionbtn() {
  var element = document.getElementById("sidebar");
  element.classList.toggle("active");
}



function myFunctionchatbtn() {
  var element = document.getElementById("chat_area");
  element.classList.toggle("active");
}

function backbtn() {
  var element = document.getElementById("chat_area");
  element.classList.toggle("active");
}


// if ( $(window).width() > 767 ) {
$('#review_slider').slick({
  // dots: false,
  // arrows:true,
  // infinite: false,
  // speed: 300,
  // slidesToShow:1,
  // slidesToScroll: 1,
  // autoplay:false,

  dots: false,
  infinite: false,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    }
  ]
});
// }




