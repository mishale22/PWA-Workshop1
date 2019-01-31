
function displayFunctionEmpl() {
  var x = document.getElementById("employment-sh");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function displayFunctionEduc() {
  var x = document.getElementById("education-options");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$("ul").on("click","li", function(event){ 
	$(this).toggleClass("completed");
});

$("input").on('keypress', function(e){

	if(e.which== 13){
		var valor= $(this).val();
		console.log(valor);
		$("ul").append('<li> <span class="delete"> <i class="fas fa-trash"></i> </span>'+ valor+'<div class="container"> <div class="skills java">90%</div></div> </li>');
		$(this).val('');
	}
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

