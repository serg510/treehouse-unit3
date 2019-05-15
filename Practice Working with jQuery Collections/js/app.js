//1. Add a "featured" tag to the second item in the list: 
const $addTag = $('ul li:nth-child(2)');
  //  Append a new span element containing the word "Featured" to the list item
  const $newElement= $('<label><span> Featured</span></label>');
$addTag.append($newElement);
  //  Add a class of "featured" to the new span element. 
$newElement.addClass('featured')

//2. Add a class of "new" to the last item in the list. You can traverse to the last item or find a jQuery method that helps you select the last item in the list. 
$('ul li:last-child').addClass('new');

//3. Add an attribute to each link so that all anchor tags open in a new tab. 
$('a').attr('target','_blank');

//4. Select and print the index and text of each anchor tag to the console
$('li').each(function(index){
  console.log(index +': ' + $(this).text() );

});

//5. Refactor question #4 using the 'this' keyword. 
