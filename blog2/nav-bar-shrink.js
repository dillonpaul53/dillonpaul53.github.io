// Enabling resizing of the top nav bar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
    document.getElementById("top-nav-bar").style.height = "50px";
    document.getElementById("top-nav-bar").style.lineHeight = "50px";
  } else {
    document.getElementById("top-nav-bar").style.height = "150px";
    document.getElementById("top-nav-bar").style.lineHeight = "150px";
  }
}
