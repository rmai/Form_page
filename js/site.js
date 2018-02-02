$('#contact-form').on('submit',
  function() {
    console.log('The form was submitted.');
    var email = $('#email').val();
    $(this).remove();
    $('body').append('<h1>Thank You. Email Address: ' + email + '</h1>');
  }
);
