/*shimThis.js - by Danieltamkin*/
/*shim an element to its top element*/
(function( $ ) {
	$.fn.shimThis = function(data) {
    if(data == undefined){
			$data = "nothing";
		}
		else{
			$data = data;
		}

  };
}( jQuery ));
