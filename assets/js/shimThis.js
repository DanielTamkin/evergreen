/*shimThis.js - by Danieltamkin*/
/*center an element to its parent.*/
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
