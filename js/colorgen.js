function text(){
	var genThree = document.querySelectorAll("#gen");
	var genAll = document.querySelectorAll("#all");
    
	var deg = 360;
	for(let i = 0; i < genThree.length; i++){
		genThree[i].style.transform = "rotateX(" + (deg * 2 )+"deg)";
	}
	for(let i = 0; i < genAll.length; i++){
		genAll[i].style.transform = "rotateX(" + (- deg)+"deg)";
	}
}
setTimeout(text,1700);
//Function for different color palette
function random_text_color(){
	let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

	let a;

	function populate(a){
		for(let i =0; i < 6; i++){
			let x = Math.round(Math.random() * 14);
			let y = hex[x];
			a += y;
		}
		return a;
	}
	let color1 = populate("#");
	let color2 = populate("#");
	let color3 = populate("#");
	let color4 = populate("#");
	let color5 = populate("#");
	let color6 = populate("#");
	let color7 = populate("#");
	let color8 = populate("#");
	let color9 = populate("#");
	let color10 = populate("#");
	let color11 = populate("#");
	let color12 = populate("#");
	var angle = "to right";
	let gradient = 'linear-gradient(' + angle + ',' + color1 + ',' + color2 + ")";

	//palettes
	var box1 = document.getElementById("box1");
	var text1 = document.getElementById("text1");
	box1.style.backgroundColor = color6;
	text1.innerText = color6;

	var box2 = document.getElementById("box2");
	var text2 = document.getElementById("text2");
	box2.style.backgroundColor = color5;
	text2.innerText = color5;

	var box3 = document.getElementById("box3");
	var text3 = document.getElementById("text3");
	box3.style.backgroundColor = color4;
	text3.innerText = color4;

	var box4 = document.getElementById("box4");
	var text4 = document.getElementById("text4");
	box4.style.backgroundColor = color3;
	text4.innerText = color3;

	var box5 = document.getElementById("box5");
	var text5 = document.getElementById("text5");
	box5.style.backgroundColor = color2;
	text5.innerText = color2;

	var box6 = document.getElementById("box6");
	var text6 = document.getElementById("text6");
	box6.style.backgroundColor = color1;
	text6.innerText = color1;

	var box7 = document.getElementById("box7");
	var text7 = document.getElementById("text7");
	box7.style.backgroundColor = color7;
	text7.innerText = color7;

	var box8 = document.getElementById("box8");
	var text8 = document.getElementById("text8");
	box8.style.backgroundColor = color8;
	text8.innerText = color8;

	var box9 = document.getElementById("box9");
	var text9 = document.getElementById("text9");
	box9.style.backgroundColor = color9;
	text9.innerText = color9;

	var box10 = document.getElementById("box10");
	var text10 = document.getElementById("text10");
	box10.style.backgroundColor = color10;
	text10.innerText = color10;

	var box11 = document.getElementById("box11");
	var text11 = document.getElementById("text11");
	box11.style.backgroundColor = color11;
	text11.innerText = color11;

	var box12 = document.getElementById("box12");
	var text12 = document.getElementById("text12");
	box12.style.backgroundColor = color12;
	text12.innerText = color12;

}
random_text_color();
var myInterval = setInterval(random_text_color, 8000);

// var card = document.querySelectorAll("#palette .card");
// for(let i = 0; i < card.length; i++){
// 	card[i].addEventListener('mouseover', (e)=>{
// 		if(e.target){
// 		clearInterval(myInterval);
// 	}
// 	});
// 	card[i].addEventListener('mouseout', (e)=>{
// 		if(e.target){
// 		setInterval(random_text_color, 8000);
// 	}
// 	});
// }

// Color generator function
function getNewColor(){
    var symbols = "0123456789ABCDEF";
    color = "#";
    for(var i = 0; i < 6; i++){
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    var val = document.getElementById("PasswordResult");
	val.value = color;
    val.style.border = "2px solid" + color;

	//color conversions

	//function for lightening or darkening a color
	function LightenDarkenColor(col, amt) {
		var usePound = false;
	  
		if (col[0] == "#") {
			col = col.slice(1);
			usePound = true;
		}
	 
		var num = parseInt(col,16);
	 
		var r = (num >> 16) + amt;
	 
		if (r > 255) r = 255;
		else if  (r < 0) r = 0;
	 
		var b = ((num >> 8) & 0x00FF) + amt;
	 
		if (b > 255) b = 255;
		else if  (b < 0) b = 0;
	 
		var g = (num & 0x0000FF) + amt;
	 
		if (g > 255) g = 255;
		else if (g < 0) g = 0;
	 
		return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
	  
	}

	//lighter1
	var lighter1 = document.getElementById("normal");
	var lightertext1 = document.getElementById("normaltext");
	var newLight = LightenDarkenColor(color, 10);
	lighter1.style.backgroundColor = newLight;
	lightertext1.innerText = newLight;

	//lighter2
	var lighter2 =document.getElementById("lighter1");
	var lighttext2 = document.getElementById("lighttext1")
	var newLight1 = LightenDarkenColor(color, 20);
	lighter2.style.backgroundColor = newLight1;
	lighttext2.innerText = newLight1;

	//lighter3
	var lighter3 =document.getElementById("lighter2");
	var lighttext3 = document.getElementById("lighttext2")
	var newLight2 = LightenDarkenColor(color, 30);
	lighter3.style.backgroundColor = newLight2;
	lighttext3.innerText = newLight2;

	//normal
	var normal =document.getElementById("dark1");
	var normaltext = document.getElementById("darktext1");
	normal.style.backgroundColor = color;
	normaltext.innerText = color;

	//darker1
	var dark1 =document.getElementById("dark2");
	var darktext1 = document.getElementById("darktext2");
	var newDark1 = LightenDarkenColor(color, -10);
	dark1.style.backgroundColor = newDark1;
	darktext1.innerText = newDark1;

	//darker2
	var dark2 =document.getElementById("dark3");
	var darktext2 = document.getElementById("darktext3");
	var newDark2 = LightenDarkenColor(color, -20);
	dark2.style.backgroundColor = newDark2;
	darktext2.innerText = newDark2;
}

//Copy function
let button = document.getElementById("clipboardBtn");
let copyText = document.getElementById("PasswordResult");
button.addEventListener("click", (e) => {
    e.preventDefault();
    copyText.select();
    document.execCommand("copy");

   navigator.clipboard.writeText(copyText.value);
   window.alert("Copied the text: " + copyText.value);
}); 


//Function for theme change form light to dark or vice versa
window.onload=function(){
	var theme = localStorage.getItem('data-theme');
	if(theme=='light'){
	  document.documentElement.setAttribute('data-theme', 'light');
	  var lightDark = document.getElementById("darkLight");
	  lightDark.innerText = "Dark";
	  lightDark.style.color = "black";
	  var footer = document.getElementById("footer-text");
	  footer.style.color = "#595959";
	}else if(theme==''){
	  document.documentElement.setAttribute('data-theme', 'light');
	}else if(theme=='dark'){
	  document.documentElement.setAttribute('data-theme' , 'dark');
	  document.getElementById("checkbox").checked = true;
	  var lightDark = document.getElementById("darkLight");
	  lightDark.innerText = "Light";
	  lightDark.style.color = "#f0f0f3";
	  var footer = document.getElementById("footer-text");
	  footer.style.color = "#595959";
	}
  }
  function toggle(){
	var checkbox = document.getElementById("checkbox");
	if(checkbox.checked==true){
	  document.documentElement.classList.add('transition');
	  document.documentElement.setAttribute('data-theme', 'dark');
	  localStorage.setItem('data-theme','dark');
	  var lightDark = document.getElementById("darkLight");
	  lightDark.innerText = "Light";
	  lightDark.style.color = "#f0f0f3";
	  var footer = document.getElementById("footer-text");
	  footer.style.color = "#595959";
	}
	else if(checkbox.checked==false){
	  document.documentElement.classList.add('transition');
	  document.documentElement.setAttribute('data-theme', 'light');
	  localStorage.setItem('data-theme','light');
	  var lightDark = document.getElementById("darkLight");
	  lightDark.innerText = "Dark";
	  lightDark.style.color = "black";
	  var footer = document.getElementById("footer-text");
	  footer.style.color = "#595959";
	}
  };