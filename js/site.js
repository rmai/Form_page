$('#contact-form').on('submit',
  function() {
    //when submit un successfully
    if (document.getElementById("name").value === "" && document.getElementById("email").value == "" ) {
      window.alert("Please enter your name and email");
      document.getElementById("name").style.borderColor = "red";
      document.getElementById("email").style.borderColor = "red";
    }
    else if (document.getElementById("name").value =="") {
      window.alert("Please enter your name");
      document.getElementById("name").style.borderColor = "red";
    }
    else if (document.getElementById("email").value=="") {
      window.alert("Please enter your email");
      document.getElementById("email").style.borderColor = "red";
    }
    //when submit successfully
    else {
      console.log('The form was submitted.');
      var email = $('#email').val();
      var name = $('#name').val();
      $(this).remove();
      $('body').append('<h1>Thank You, ' + name +  ' for your email address: ' + email + '</h1>');
      $('#instruct').remove();
      $('#footer').remove();
    }
  }
);
