// Enables resizing of the top nav bar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("header").style.height = "50px";
    document.getElementById("header").style.lineHeight = "50px";
  } else {
    document.getElementById("header").style.height = "130px";
    document.getElementById("header").style.lineHeight = "130px";
  }
}
