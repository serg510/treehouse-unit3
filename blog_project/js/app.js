// $('#flashMessage').hide()

// $('#previewButton').click(function() {
//   const title = $("#blogTitleInput").val();
//   const content = $("#blogContentInput").val();

//   $("#blogTitlePreview").text(title);
//   $("#blogContentPreview").html(content);

//   $("#flashMessage")
//     .slideDown(1000)
//     .delay(3000)
//     .slideUp();
// });



// const title = 'My first Blog Post';

// //.text wont work on html ex: <strong> use .html
// const content = 'This is my <strong>first</strong> post';

// $('#blogTitlePreview').text(title);
// //$('#blogContentPreview').text(content);
// $('#blogContentPreview').html(content);
$('#flashMessage').hide();

$('#previewButton').click(function(){
    const title = $('#blogTitleInput').val();
    const content = $('#blogContentInput').val();

 $('#blogTitlePreview').text(title);

$('#blogContentPreview').html(content);
$('#flashMessage')
    .slideDown(1000)
    .delay(3000)
    .slideUp();

});