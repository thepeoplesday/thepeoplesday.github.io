$(document).ready(function() {

  var bgImageArray = ["bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg"],
  base = "images/",
  secs = 4;
  bgImageArray.forEach(function(img){
      new Image().src = base + img;
      // caches images, avoiding white flash between background replacements
  });

  function backgroundSequence() {
  	window.clearTimeout();
  	var k = 0;
  	for (i = 0; i < bgImageArray.length; i++) {
  		setTimeout(function(){
  			document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
  			document.documentElement.style.backgroundSize ="cover";
  		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 2000))} else { k++; }
    }, (secs * 2000) * i)
  	}
  }
  backgroundSequence();



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
