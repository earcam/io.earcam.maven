// Smooth scrolling
// (simplified version, taken from http://stackoverflow.com/a/14805098/1173184)
$(window).load(function(){
  $('a[href^="#"]:not([href^="#carousel"]):not([data-toggle="dropdown"])').on('click', function(e) {

     e.preventDefault();

     var hash = this.hash;

     $('html, body').animate({ 
    	 scrollTop: (hash == '') ? 0 : $(this.hash).offset().top
     }, 300, function() {
         window.location.hash = hash;
     });

  });
});