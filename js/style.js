

$(document).ready(function() {
    for (var x = 0; x < 16; x++) {
        for (var y = 0; y < 16; y++) {
            $("<div>").addClass("unit").appendTo('#container');
        }
    }

$(".unit").hover(function(){
        $(this).css("background-color", "blue");
        }, 

        function(){
        $(this).css("background-color", "pink"); 
    });


	$("button").click(function(){
		$(".unit").css("background-color", "white");
    prompt("What size grid would you like?");
})

});


