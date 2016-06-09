$(document).ready(function() {

    var scroll_pos = 0;
    var animation_begin_pos = 0; //where you want the animation to begin
    var animation_end_pos = 1000; //where you want the animation to stop
    var beginning_color = new $.Color( 'rgb(246,231,171)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color( 'rgb(119,124,255)' ); ;//what color we want to use in the end
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) {
           // console.log( 'scrolling and animating' );
            //we want to calculate the relevant transitional rgb value
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            //console.log( newColor.red(), newColor.green(), newColor.blue() );
            $('.menu').animate({ backgroundColor: newColor }, 0);
        } else if ( scroll_pos > animation_end_pos ) {
             $('.menu').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('.menu').animate({ backgroundColor: beginning_color }, 0);
        } else { }
});

// $(window).scroll(function(){
//   var windowWidth = $(this).width();
//   var windowHeight = $(this).height();
//   var windowScrollTop = $(this).scrollTop();
//
//   // effect - No1
//   if(windowScrollTop>300){
//     $('.banner').animate('display','none');
//
//   }else if (windowScrollTop>1000){
//     $('.banner').css('display','block');
//
//   }
// });
// $(function(){
//   var $elems = $('.animateblock');
//   var winheight = $(window).height();
//   var fullheight = $(document).height();
//
//   $(window).scroll(function(){
//     animate_elems();
//   });
//
//   function animate_elems() {
//     wintop = $(window).scrollTop(); // calculate distance from top of window
//
//     // loop through each item to check when it animates
//     $elems.each(function(){
//       $elm = $(this);
//
//       if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
//
//       topcoords = $elm.offset().top; // element's distance from top of page in pixels
//
//       if(wintop > (topcoords - (winheight*.50))) {
//         firstAnimation();// animate when top of the window is 3/4 above the element
//         $elm.addClass('animated');
//       }
//     });
//   }
// }
// var firstAnimation = function () {
//     $('.clients .clients-info').each(
//         function () {
//             $(this).delay(500).animate({
//                 opacity: 1,
//                 height: '180',
//                 width: '250'
//             }, 2000);
//         }
//     );
// };// end animate_elems()
// $(window).scroll(function () {
//     var scrollTop = $(window).scrollTop();
//     var height = $(window).height();
//
//     $('.header-image').css({
//         'opacity': ((height - scrollTop) / height)
//     });
// });
// window.onscroll = function() {myFunction()};
//
// function myFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("header-image-two").className = "fade-out";
//     } else {
//         document.getElementById("header-image-two").className = "";
//     }
// }

// $(window).scroll(function() {
//
//     if ($(this).scrollTop() > 0);
//      {
//         $('.header-image').fadeOut();
//      }
//     else
//      {
//       $('.header-image').fadeIn();
//      }
//  });
});
