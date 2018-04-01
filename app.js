// Your jQuery Logic will go here
console.log("connected")
const toDoListArr = []

// $('#formID').submit(function(e){
// 	//prevent the GET request
// 	e.preventDefault();
// 	//grab the value of the input field
// 	let newListEntry = $('#newInput').val();
// 	//make sure the value is being assigned to newListEntry
// 	console.log(newListEntry)
// 	//push the value into the to do list array
// 	toDoListArr.unshift(newListEntry);
// 	//make a new li
// 	let newLi = $('#listLanding').add('li');
// 	//make the content of the Li match to newListEntry / the value of the input
// 	newLi.innerHTML = newListEntry;
// 	//setup a variable that determines the first child of the ul
// 	let firstLi = $('#listLanding').firstChild;
// 	//insert into the list area the new li, placed before the first child of the ul
// 	$('newLi').insertBefore(firstLi);
// })

// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut('slow',)
	// $(this).parent().remove();
		// $(this).remove();
	});


$("button").click(function(event){
		//grabbing new todo text from input
		event.preventDefault();
		let todoText = $('#newInput').val();
		// $(this).val("");
		//create a new li and add to ul
		$('li').first().before("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		event.preventDefault();
		let todoText = $(this).val();
		// $(this).val("");
		//create a new li and add to ul
		$('li').first().before("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});