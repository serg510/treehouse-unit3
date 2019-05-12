// // When the button is pressed 
// $('.spoiler').on('click', 'button', function(){
//   //Show the spoiler text
//   $(this).prev().show();
//   //Hide the "Reveal Spoiler" button
//   $(this).hide();
// });

// // Create the "Reveal Spoiler" button
// const $button = $('<button>Reveal Spoiler</button>');
// //Append to web page
// $('.spoiler').append($button);

// //Hide the spoiler text
// $('.spoiler span').hide();
//<------------my code----------->//

//// assing 1 event handler to multiple events 
// $('#elemetn').on('click keypress', function(){
// do stuff when the element is clicked or when a key is pressed
// });

//Create the "Reveal Spoiler" button 

const $button = $("<button>Reveal Spoiler</button>");
//Append to web page
$(".spoiler").append($button);

// //event delegation 
// $(".spoiler button").on('click',function(){
  
//   //show the spoiler text
//   $(".spoiler span").show();
//   // hide the "Reveal Spoiler" button
//   $(".spoiler button").hide();
// })
$('.spoiler').on('click','button',function(e){
  console.log(e.target); 
  //show the spoiler text
  ///----You can also use the keyword "this"----///
  //$(e.target).prev().show();
  $(this).prev().show();
  // hide the "Reveal Spoiler" button
  //$(e.target).hide();
  $(this).hide();
})


//hide the spoiler text 
$(".spoiler span").hide();
//when button is pressed 
// $(".spoiler button").on('click',function(){
  
//   //show the spoiler text
//   $(".spoiler span").show();
//   // hide the "Reveal Spoiler" button
//   $(".spoiler button").hide();
// })

// //------test of my own---///
// $('.spoiler').on('mouseleave',function(){
//   $('spoiler span').hide();
//   $('spoiler button').show();

// });