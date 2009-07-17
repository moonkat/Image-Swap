 /**
     * Image Swap
     * (like the parties your parents never told you about...)
     * 
     * @example <img src="images/someimage.png" swapsrc="images/someotherimage.png">
     */
	
// Needed files: jquery.js

$(document).ready(function(){
    var swapsrcSelector = "[swapsrc]";
    var swapsrcTag = "swapsrc";
    
    $(swapsrcSelector).each(function() {
		var me = $(this)
		var im1 = me.attr("src"), im2 = me.attr(swapsrcTag);
		me.hover(function() {
			me.attr("src", im2);
			me.attr(swapsrcTag, im1);
		}, function() {
			me.attr("src", im1);
			me.attr(swapsrcTag, im2);
		});
	});
});