(function(){
  "use strict";

  // toggle responsive menu and changes logo color
  var burgerIcon = document.querySelector(".menu__toggle");
  var body = document.querySelector("body");

  burgerIcon.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.toggle('body--menu-visible');
  });

  if (window.innerWidth < 1116) {
    document.onkeydown = function(e) {
      e = e || window.event;
      if (e.keyCode == 27) {
          body.classList.remove('body--menu-visible');
      }
    };
  }
    
  
  $('#subscribe').submit(function(event) {
      event.preventDefault();
      var sendData = {
          senderName: $("input[name='name']").val(),
          senderCompany: $("input[name='company']").val(),
          senderEmail: $("input[name='email']").val(), 
          content: $(".form__input--textarea").val(), 
          hearFrom: $("input[name='how-did-you-hear']").val(),
          receiverEmail: 'info@techbow.com',
          subject: 'Hire Techbow Developer'
      };
      $.ajax({
          method: 'POST',
          url: '/hire-developers',
          data: JSON.stringify(sendData),
          dataType: 'json',
          contentType: 'application/json'
      })
      .done(function(data) {
          console.log(data);
      })
      .always(function() {
          $(".cd-popup-container").prepend("<p>Than you! <br> We will contact you as soon as possible.</p>");
          $('.cd-popup').addClass('is-visible');
      });
  });
    
  $(".cd-popup-container .cd-buttons li:first-child a").click(function() {
    $('.cd-popup').removeClass('is-visible');
  });

  $(".cd-popup-container .cd-popup-close").click(function() {
    $('.cd-popup').removeClass('is-visible');
  });
})();
