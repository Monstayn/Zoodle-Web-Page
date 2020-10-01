let animationDoneSection1 = false;
let animationDoneSection2 = false;


$(window).scroll(function() {

    if ($(this).scrollTop()> ($('header').height() + $('.slider-pic').height()) / 3)
     {
        $('section.type-1 .content h3').animate({opacity: 1 , top: 0}, 600);
        $('section.type-1 .content p').delay(200).animate({opacity: 1 , top: 0}, 600);
        if (animationDoneSection1 === false){
            $('section.type-1 .images .tiger').animate({opacity: 1 , left: '+=20'}, 600);
            $('section.type-1 .images .monkey').delay(400).animate({opacity: 1 , left: '-=20'}, 600);
            animationDoneSection1 = true;
      }
     }
     if ($(this).scrollTop()> 680)
     {
        $('section.type-2 .content h3').animate({opacity: 1 , top: 0}, 600);
        $('section.type-2 .content p').delay(200).animate({opacity: 1 , top: 0}, 600);
        if (animationDoneSection2 === false){
         $('section.type-2 .images .lion').animate({opacity: 1 , left: '-=20'}, 600);
         $('section.type-2 .images .deer').delay(400).animate({opacity: 1 , left: '+=20'}, 600);
         animationDoneSection2 = true;
   }
        $('section.type-2 .content span').each(function(i){
           $(this).delay((i * 100) + 800).animate({opacity: 1 , top: 0}, 600);
        })
     }
     if ($(this).scrollTop()> 850)
     {
        $('footer').animate({opacity: '1'}, 900);
     }
 });

