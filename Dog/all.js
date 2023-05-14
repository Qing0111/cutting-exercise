$(document).ready(function () {
  $(".burger").on("click", function (e) {
    $("nav").slideToggle(500);
    // console.log(e.type);
  });
});
