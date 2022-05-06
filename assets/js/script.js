$(document).ready(function () {
  $(".modal").modal();
});

$(document).ready(function () {
  $(".sidenav").sidenav();
});

$(document).ready(function () {
  $(".parallax").parallax();
});

var elem = document.querySelector(".sidenav");
var instance = M.Sidenav.getInstance(elem);
