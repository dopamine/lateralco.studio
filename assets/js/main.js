

$( window ).on('load', function() {

  $('.dismiss').on('click',function() {
    $(this).closest('.overlay').css('display', 'none');
    $('html').css('overflow','auto');
  });

  $('button.contactbutton').on('click', function() {
    $('.overlay').css('display','block');
    $('html').css('overflow','hidden');
  });

});
