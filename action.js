






$(document).ready(function() {
$(window).scroll(function() {
var num = $(window).scrollTop();
    if(num > 1200)
   {
     $("#head").text("About Me");	
   };	
   
   if(num < 1200)
   {
   $("#head").text("Myke Lincoln");
   };
});
});

