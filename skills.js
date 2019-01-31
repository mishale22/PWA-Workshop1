$("ul").on("click","li", function(event){ 
	$(this).toggleClass("completed");
});

$("input").on('keypress', function(e){

	if(e.which== 13){
		var valor= $(this).val();
		console.log(valor);
		var num= Math.round(Math.random() * (100 - 1) + 1);
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		$("ul").append('<li> <span class="delete"> <i class="fas fa-trash"></i> </span>'+ valor+'<div class="container"> <div class="skills" style="background-color:'+randomColor+'">'+ num +'% </div> </div> </li>');
		$(this).val('');
	}
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});
