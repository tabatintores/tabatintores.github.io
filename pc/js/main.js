const dayElement = document.querySelector('.day');
const menu = document.querySelector('.circle-menu');
const links = document.querySelectorAll('.circle-menu ul li');
const tooltip = document.querySelectorAll('.tooltip'); 
const light = document.querySelector('.circle-menu ul li:nth-of-type(6)');
const tip6 = document.querySelector('.tip-6');
const tip6selector = document.querySelector('.circle-menu li:nth-child(6) a');
const body= document.querySelector('body');
const circleMenu = document.querySelector('.circle-menu ul');
const ipText = document.querySelector('.ip');
var isDay = true;


//Работа с сайтом
menu.addEventListener('mouseover', (evt) => {
	menu.style.transform = `scale(1.3)`;
});
menu.addEventListener('mouseout', (evt) => {
	menu.style.transform = `scale(1)`;
});

var addTooltip = function(link, tip) {
	link.addEventListener('mousemove', (evt) => {
		var top = event.pageY  + 20 + 'px';
		var left = event.pageX  + 20 + 'px';
		tip.classList.add('tooltip-enabled');
		tip.style.cssText = "top: " + top + "; left: " + left + ";"; 
		if (isDay){
			link.style.cssText = "background-color: rgba(241, 196, 15, 1);";
		} else {
			link.style.cssText = "background-color: rgba(43,100,130,1);";
		}
	});

	link.addEventListener('mouseout', (evt) => {
		tip.classList.remove('tooltip-enabled');
		link.style.cssText = "background-color: none;";
	});
}

for (var i = 0; i < links.length; i++) {
	addTooltip(links[i], tooltip[i]);
}

light.addEventListener('click', function() {
	if (isDay){
		body.classList.add('night');
		isDay = false;
		tip6.textContent = "Включить день";
		tip6selector.style.cssText = "background-image: url(/img/sun.svg);"; 
		circleMenu.style.cssText = "background-color: rgba(43,100,130,0.5);";
	}	else {
		body.classList.remove('night');
		isDay = true;	
		tip6.textContent = "Включить ночь";
		tip6selector.style.cssText = "background-image: url(/img/moon.svg);"; 
		circleMenu.style.cssText = "background-color: rgba(241, 196, 15, 0.5);";
	}
});


ipText.addEventListener('click', function() {
	copyIp('primecorp.su');
	var ipText = document.querySelector('.ip p');
	ipText.textContent = "Скопировано!"
});

function copyIp(text) {
	var input = document.createElement('input');
	input.setAttribute('value', text);
	document.body.appendChild(input);
	input.select();
	var result = document.execCommand('copy');
	document.body.removeChild(input)
	return result;
};
