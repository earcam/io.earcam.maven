// Additional skin Javascript
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

	$(function(){

		var $window = $(window)

		// Start carousel
		$(function() {
			$('.carousel').carousel();
		});

		// activate syntax higlighting with highlight.js
		// Note: only run if `hljs` exists
		if (typeof hljs != 'undefined')
		{
			$('pre.source').each(function(i, e) {hljs.highlightBlock(e)});
		}

	})

}(window.jQuery);
