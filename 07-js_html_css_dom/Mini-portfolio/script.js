const body = document.body;
	// On met le body dans une constante pour éviter d'avoir à répéter document.body

const btnToggle = document.querySelector(".btn-toggle");
//On attribut une constante à notre bouton
//Et surtout on pense bien à mettre le point devant le nom de la class !!! Sinon ça ne fonctionne pas...

btnToggle.addEventListener('click', () => {

	if (body.classList.contains('dark')) {
		body.classList.add('light');
		body.classList.remove('dark');
		//On pourrait aussi utiliser .replace('dark','light')
        btnToggle.innerHTML="Mode clair";
	} else if (body.classList.contains('light')) {
		body.classList.add('dark');
		body.classList.remove('light');
        btnToggle.innerHTML="Mode sombre";
	}
});

const btnSizePlus = document.querySelector(".btn-size-plus");
const btnSizeLess = document.querySelector(".btn-size-less");
var currentFontSize = parseInt(window.getComputedStyle(body).fontSize);

btnSizePlus.addEventListener('click', () => {
	if (currentFontSize < 21) {
		let newFontSize = currentFontSize+1;
		body.style.fontSize = newFontSize + "px";
		currentFontSize=newFontSize;
	} else {
		alert("Taille maximale atteinte !")
	}
	
})

btnSizeLess.addEventListener('click', () => {
	if (currentFontSize > 7) {
	let newFontSize = currentFontSize-1;
		body.style.fontSize = newFontSize + "px";
		currentFontSize=newFontSize;
	} else {
		alert ("Taille minimale atteinte !")
	}
})