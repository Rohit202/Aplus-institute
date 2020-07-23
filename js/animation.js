(function(){

var wordArray = [ 'Mission', 'Vision' , 'Core Principles'];	
var element = document.getElementByTagName('p')[0];
var wordIndex = 1;

var resetAnimation = function(){
	element.classlist.remove('flip');
};

setInterval(function(){
	switch(wordIndex){
		case 0:
		element.classList.add('flip');
		element.textContent = wordArray[wordIndex];
		wordIndex = 1;
		setTimeout(resetAnimation, 1000);
		break;
		
		case 1:
		element.classList.add('flip');
		element.textContent = wordArray[wordIndex];
		wordIndex = 2;
		setTimeout(resetAnimation, 1000);
		break;
		
		case 2:
		element.classList.add('flip');
		element.textContent = wordArray[wordIndex];
		wordIndex = 3;
		setTimeout(resetAnimation, 1000);
		break;
		
		case 3:
		element.classList.add('flip');
		element.textContent = wordArray[wordIndex];
		wordIndex = 4;
		setTimeout(resetAnimation, 1000);
		break;
	}
},2000);
});


