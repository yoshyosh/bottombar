$(document).ready(function(){
  $(".js-mobile-form-btn").click(function(){
    $(".js-mobile-btn-container").addClass("active");
    $(".email-octopus-form-row input").attr("placeholder", "Enter email");
    $(".js-email-octopus-form-wrapper").addClass("active");
    $(".js-email-input").focus();
  })

  $(".js-mobile-cancel").click(function(){
    $(".js-mobile-btn-container").removeClass("active");
    $(".js-email-octopus-form-wrapper").removeClass("active");
  });

  $(".js-scroll-title").click(function(){
    revealShareBar();
  });
});

function revealShareBar(){
  $(".super-bottom-bar").addClass("active");
}