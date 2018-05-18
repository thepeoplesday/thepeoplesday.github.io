

/*jQuery anonymous function calls*/
(function($) {

/* ========================================================================== */

/* Documetn Ready */

$(function() {

/* Magnific Popup Lightbox */

if( $('.qt-photo-gallery').length ){

	$('.qt-photo-gallery-item').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery: {
	  	enabled:true
	  }
	  // other options
	});

}

var img = $('.qt-photo-gallery');//jQuery id selector

  var width = img.width(); //jQuery width method
  var height = img.height(); //jQuery height method

  if(width < height){
     img.attr('id', 'rotate');
  }


/* End: Document Ready */

});


/* ========================================================================== */

})(jQuery);
