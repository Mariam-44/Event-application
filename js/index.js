// ^ side Nav
const sideNAvWidth = $(".side-nav").outerWidth();

$(".side-nav").css({ left: `-${sideNAvWidth}px` });

$(".close").on("click", function () {
  $(".side-nav").animate({ left: `-${sideNAvWidth}px` }, 400);
  $(".open").animate({ marginLeft: 0 }, 400);
});

$(".open").on("click", function () {
  $(".side-nav").animate({ left: 0 }, 400);
  $(".open").animate({ marginLeft: `${sideNAvWidth}px` }, 400);
});

// ^ scroll to seaction

$(".side-nav a").on("click",function(){
  const sectionLoc = $(this).attr("href");
 const sectionOffset = $(sectionLoc).offset().top;
 $("html,body").animate({scrollTop : sectionOffset},500)
})

// ^ accordion 
$(".other").next().hide();

$("h3").on("click", function () {
  $(".txt").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});


// ^ Counter
const countDownDate = new Date("Nov 29,2024 00:00:00").getTime();
const id = setInterval(function(){
let current = new Date().getTime();
let distence = countDownDate - current ;

let days = Math.floor(distence/ (1000*60*60*24));
let hours =Math.floor(distence % (1000*60*60*24)/(1000*60*60));
let min = Math.floor(distence % (1000*60*60)/(1000*60));
let sec= Math.floor(distence % (1000*60)/(1000));

$(".days").html(days + " DAY");
  $(".hours").html(hours + "h");
  $(".minutes").html(min + "m");
  $(".seconds").html(sec + "s");

  if(distence <0 ){
    clearInterval(id);
  }
},1000);


// ^ textBox limit

$(".text-box").keyup(function () {
  let length = $(this).val().length;

  let charCount = 100 - length;

  if (charCount > 0) {
    $(".num").html(charCount);
  }
  else
  $(".num").html("your available character finished");
});