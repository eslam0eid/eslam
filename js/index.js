$(document).ready(function(){


// mix it up plugin
var mixer = mixitup('.gallery');

 //loading page
 $(window).on('load',function(){

  $('.loading').fadeOut(2000,function(){

      $('body').css('overflow', 'auto')
  })
})

// venobox plugin
$(document).ready(function(){
    $('.venobox').venobox(); 
  });

  AOS.init({
    duration:1000
    
    });

  

// typed.js plugin
var typed = new Typed('.element', {
  strings: ['Frontend developer', 'Graphic designer'],
  cursorChar: '_',
  typeSpeed: 100,
  loopCount: Infinity,
  loop: true,
  backSpeed: 100,
});

 
    // counter plugin
    $('.counter').counterUp({
      delay: 1,
      time: 10000
  });

AOS.init({
duration:1000

});



  })
  let featuresOffser=$("#about").offset().top;
  $(window).scroll(function(){
      if($(this).scrollTop() > 500 )
      {
        $("#btnup").fadeIn(1000);
      }
      else{
        $("#btnup").fadeOut(1000);
      }
  
  let wScrool=$(window).scrollTop();
  if(wScrool > featuresOffser)
  {
  
  $("#nav-bar").css("backgroundColor" , "rgba(0 , 0 , 0 , 0.5)");    
  }
  else{
      $("#nav-bar").css("backgroundColor" , "transparent"); 
  }
  
  })


  $("nav ul li a").click(function(){

    let ahref=$(this).attr("href");
    
    let sectionOffset=$(ahref).offset().top;
    
    $("html,body").animate({scrollTop:sectionOffset} , 1000);
    

})

  $("#btnup").click(function(){

    $("body ,html").animate({scrollTop:"0px"},1000);
    
    
    })