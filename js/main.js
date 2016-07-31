$(function() {
	$( "#dialog" ).dialog({
		autoOpen: false,
		modal: true,
		//draggable: false,
		resizable: false,
		buttons: {
			"Donate using PayPal": function() {
				window.open("http://paypal.me/tjmarkham", "_blank");
				//$( this ).dialog( "close" );
			},
			"Donate using Credit Card": function() {
				window.open("http://donate.win10widgets.com/", "_blank");
				//$( this ).dialog( "close" );
			}
		},
		show: {
			effect: "fade",
			duration: 200
		},
		hide: {
			effect: "fade",
			duration: 200
		},
		open: function () {
			$(this).parent().promise().done(function () {
				$($('.ui-dialog :button')[1]).focus()
				$($('.ui-dialog :button')[1]).blur()
			});
		}
	});
	
	$(".ui-dialog-buttonpane").append( "<a id=\"noThanks\">No thanks, I don't want to donate</a>" );
	
	$( "#noThanks" ).on( "click", function() {
		$( "#dialog" ).dialog( "close" );
    });
	
	$( ".downloadButton" ).on( "click", function() {
		$( "#dialog" ).dialog( "open" );
    });
});
