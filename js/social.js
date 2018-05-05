$(document).ready(function(){
  $(".js-mobile-form-btn").click(function(){
    $(".js-mobile-btn-container").addClass("active");
    $(".email-octopus-form-row input").attr("placeholder", "Enter email");
    $(".js-email-octopus-form-wrapper").addClass("active");
    $(".js-email-input").focus();
  })

  $(".js-mobile-cancel").click(function(){
    slideBackEmailForms();
  });

  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#js-scroll-trigger'
  })
  .setClassToggle('.super-bottom-bar', 'active')
  .addIndicators()
  .triggerHook(1)
  .addTo(controller);

  $(".js-scroll-title").click(function(){
    revealShareBar();
  });

  document.querySelector(".js-email-octopus-form").addEventListener("submit", function(e){
    if(isEmail($(".js-email-input").val())){
       $(".js-bottom-bar-signup-text").addClass("show-success");
       slideBackEmailForms();
       removeEmailForms();
    } else {
      alert("Your email address may have a mispelling");
    }
});
});

function slideBackEmailForms(){
  $(".js-mobile-btn-container").removeClass("active");
  $(".js-email-octopus-form-wrapper").removeClass("active");
}

function removeEmailForms(){
  $(".js-mobile-form-btn").addClass("perma-hide");
  $(".js-email-octopus-form-wrapper").addClass("perma-hide");
}


function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function revealShareBar(){
  $(".super-bottom-bar").addClass("active");
}

