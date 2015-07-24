/*shimThis.js - by Danieltamkin*/
/*shim an element ontop of its element*/
(function( $ ) {
	$.fn.shimThis = function(data) {
    if(data == undefined){
			$data = "nothing";
		}
		else{
			$data = data;
		}
		$this = $(this);
		function calculate(){
			var elementHeight 		= $this.height(),
					topelementHeight 	= $data.height();
			console.log("elementHeight="+elementHeight);
			console.log("topelementHeight="+topelementHeight);
		}
		return this.each(function() {
			calculate();
			$(window).resize(function() {
				calculate();
			});
		});
  };
}( jQuery ));
