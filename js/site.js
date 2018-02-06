$('#contact-form').on('submit',
  function() {
    console.log('The form was submitted.');
    var email = $('#email').val();
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    $(this).remove();
    $('body').append('<h1>Thank You, ' + firstname + ' ' + lastname + ' for your email address: ' + email + '</h1>');
    $('#instruct').remove();
    $('#footer').remove();
  }
);
