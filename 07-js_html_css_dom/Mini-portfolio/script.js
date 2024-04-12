const btnToggle = document.querySelector(".btn-toggle");
//On attribut une constante à notre bouton

btnToggle.addEventListener('click', () => {
	const body = document.body;

	// On met le body dans une constante pour éviter d'avoir à répéter document.body

	if (body.classList.contains('dark')) {
		body.classList.add('light');
		body.classList.remove('dark');
        btnToggle.innerHTML="Mode clair";
	} else if (body.classList.contains('light')) {
		body.classList.add('dark');
		body.classList.remove('light');
        btnToggle.innerHTML="Mode sombre";
	}
});
