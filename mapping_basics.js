
// this should not be in final verison
// it generetes with html array
let basic_x = 0;  let basic_y = 0; let time = .2;


let player_stroke = "sprites/chosen.gif";		

let sprite_src_stroke = "sprites/sprite_1.png";		// adds 5 different sources for image inside wall part

let obj_num = 1; 							// adds class from wall_1 to wall_5 to set different styles for image in css


function chosen_loader() {

	if (!player_src.value) { player_stroke = player_src.placeholder }
	
	else { player_stroke = player_src.value };

	document.getElementById("chosen").innerHTML = '<img src="' + player_stroke + '" class="pl" ></div>';

};

function sprite_source(a) {

	obj_num = a;

	(document.getElementById("sprite_" + a).value) ? 
	
		sprite_src_stroke = document.getElementById("sprite_" + a).value : 
		
		sprite_src_stroke = document.getElementById("sprite_" + a).placeholder;

};
	
	
	
function submit() {

	container.innerHTML = code_src.value;
	
	document.getElementById("screen").style.display = "none";

	resize();
	
	document.getElementById("0_0_block").innerHTML="<div id='chosen'></div>";

};

function pressed(field) {

	message(field);
	let element = document.getElementById(field);

	if (!onDoor.checked) {

			if (element.id[0] === 'n' ) {
				element.classList.remove("taken");
				element.id = element.id.slice(1);
				element.innerHTML = "";
			} else {
				element.classList.add("taken");
				element.id = "n" + element.id;
				element.innerHTML = "<img class='wall_" + obj_num + "' src='" + sprite_src_stroke + "' >"; 
			};
	
	} else {
	
			if (element.id[0] === 'n' ) {
				message("no it is taken");
			} else if ( element.classList.contains("door") ) {
				element.classList.remove("door");
			} else	{
				element.classList.add("door");
			};
	
	};

};



container.style.width = '400px';

function add_w() {

	container.style.width = 20 + parseInt( container.style.width ) + "px";

};

function rem_w() {

	container.style.width = -20 + parseInt( container.style.width ) + "px";

};

function load_bck(image_name) {

	if (!image_name) {

		container.style.backgroundImage = 'url("sprites/bck.png")';
	
		container.style.backgroundSize = 'cover';
		
	} else {
	
		container.style.backgroundImage = 'url(' + image_name + ')';
	
		container.style.backgroundSize = 'cover';
	
	};

};

function copy() {

	exod.value = container.innerHTML;
	
	exod.value += '<_script>  let basic_x = ';
	
	exod.value += parseInt(document.getElementById("chosen").parentElement.id.split("_")[0]);
	
	exod.value += '; let basic_y = ';
	
	exod.value += parseInt(document.getElementById("chosen").parentElement.id.split("_")[1]);
	
	exod.value += '; let time = .2;' + 'container.style.height = 20 * (';
	
	exod.value += document.getElementsByClassName("row").length;
	
	exod.value += ') + "px"; container.style.width =  20 * ('
	
	exod.value += (document.getElementsByClassName("cell").length) / (document.getElementsByClassName("row").length);
	
	exod.value += ') + "px" </_script>  ';
	

	let copyText = document.getElementById("exod");

	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices

	navigator.clipboard.writeText(copyText.value);

	alert("Text was copied to clipboard");
};

function door(text) {

	switch (text) {
  	case "":
    	message('1');
    	break;
  	case "":
    	message('2');
    	break;
  	case "":
    	message('3');
    	break;
	}

}; 

function door_list() {
	
	let array = document.getElementsByClassName("door");

	for (let i = 0 ; i < array.length; i++) {
	
		console.log( array[i].id );
	
	};

}; 

function resize() {

	container.style.height = 20 * ( document.getElementsByClassName("row").length ) + "px";
	
	container.style.width =  20 * ( document.getElementsByClassName("cell").length / document.getElementsByClassName("row").length ) + "px";
	
	consol.style.width = container.style.width;
	
	left_table.style.width = (window.innerWidth - parseInt(container.style.width) -100) / 2 + "px";
	
	right_table.style.width = (window.innerWidth - parseInt(container.style.width) -100) / 2 + "px";
	
};

function message(txt) {

	consol.innerHTML = txt + "<br><br>" + consol.innerHTML;

};

