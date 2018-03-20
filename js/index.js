$(document).ready(function() {

  $(function(){
      $(window).resize(function(e){
          placeFooter();
      });
      placeFooter();
      // hide it before it's positioned
      $('#footer').css('display','inline');
  });

  function placeFooter() {
      var windHeight = $(window).height();
      var footerHeight = $('#footer').height();
      var offset = parseInt(windHeight) - parseInt(footerHeight);
      $('#footer').css('top',offset);
  }


  var $allContentDivs = $('.navContent div') // Hide All Content Divs

$('#navbar a').click(function(){
    var $contentDiv = $("#" + this.id + "content");

    if($contentDiv.is(":visible")) {
        $contentDiv.fadeOut(); // Hide Div
    } else {
        $allContentDivs.fadeOut(); // Hide All Divs
        $contentDiv.fadeIn(); // Show Div
    }

    return false;
  });

  var images = [
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg",
    "images/bg4.jpg",
    "images/bg5.jpg",
    "images/bg6.jpg"
  ];
  var $body = $("body"),
      $bg = $("#bg"),
      n = images.length,
      c = 0; // Loop Counter

  // Preload Array of images...
  for(var i=0; i<n; i++){
    var tImg = new Image();
    tImg.src = images[i];
  }

  $body.css({backgroundImage : "url("+images[c]+")"});

  (function loopBg(){
    $bg.hide().css({backgroundImage : "url("+images[++c%n]+")"}).delay(3000).fadeTo(1200, 1, function(){
      $body.css({backgroundImage : "url("+images[c%n]+")"});
      loopBg();
    });
  }());


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
});
