$('#contact-form').on('submit',
  function() {
    console.log('The form was submitted.');
    var email = $('#email').val();
    var name = $('#name').val();
    $(this).remove();
    $('body').append('<h1>Thank You, ' + name +  ' for your email address: ' + email + '</h1>');
    $('#instruct').remove();
    $('#footer').remove();
  }
);
