// const $odd = $('a:odd');
// const $secureLinks = $('a[href^="https://"]');
// const $pdfs = $('a[href$=".pdf"]');
// const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

// $secureLinks.attr('target', '_blank');
// $pdfs.attr('download', true);

// $secureLinks.addClass('secure');
// $pdfs.addClass('pdf');

// $pdfs.on('click', function(event){
//   //check if checkbox has been checked 
//   //if zero checkboxes are checked 
//   if ($(':checked').length === 0){
//     //prevent download of document 
//     event.preventDefault();
//     //alert the user 
//     alert('Please check the box to allow PDF downloads.');
//   }
// });

// $('#links').append($pdfCheckbox);

// $('a').each(function(){
//   const url = $(this).attr('href');
//   $(this).parent().append(`(${url})`);
// });


 const $odd = $('a:odd');
 //selector that "starts with"
 const $secureLinks = $('a[href^="https://"]');
 //selector that "ends with"
 const $pdfs = $('a[href$=".pdf"]');
 //create the checkbox
 const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');
 //append the newly created checkbox to the links 
 $('#links').append($pdfCheckbox);
//setting  a links  to open on a new page 
 $secureLinks.attr('target', '_black');
 //setting pdfs to download when clicked
 $pdfs.attr('download',true);
//change the css property 
 //$odd.css('backgroundColor','lightgrey');

// add a secure class to the a links
 $secureLinks.addClass('secure')

 // add a of pdf to pdf links
 $pdfs.addClass('pdf');

 $pdfs.on('click',function(e){
    //check if checkbox has been checked

    //if zero checkboxes are checked 
    if ($(':checked').length === 0){
    //prevent download of document
    e.preventDefault();
    //alert the user
    alert('Please check the box to allow PDF downloads');
  };
    //else allow the download

 })
//print the href links on the page 

//  $('a').each(function(index,link){
//     const url = $(link).attr('href');
//     $(link).parent().append(`(${url})`);
//   //console.log(index,$(element).attr('href'))
//  });

/// same function using "this" keyword

$('a').each(function(){
  const url = $(this).attr('href');
  $(this).parent().append(`(${url})`);
//console.log(index,$(element).attr('href'))
});