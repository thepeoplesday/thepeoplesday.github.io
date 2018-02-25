$(document).ready(function() {

  var images = [
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg",
    "images/bg4.jpg",
    "images/bg5.jpg",
    "images/bg6.jpg",
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



  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    navigation: false,
    navigationPosition: 'bottom',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: true,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: true,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: false,
    sectionsColor : ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
    paddingTop: '0.1em',
    paddingBottom: '0.1em',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: true,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

  });
});
