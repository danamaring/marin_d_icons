(() => {
	console.log("fired");


	//VARIABLES

	let avocadoContainer = document.querySelectorAll("#avocado_container"),
		bananaContainer = document.querySelectorAll("#banana_container"),
		watermelonContainer = document.querySelectorAll("#watermelon_container"),
		kiwiContainer = document.querySelectorAll("#kiwi_container"),
		grapesContainer = document.querySelectorAll("#grapes_container"),
		tamarindContainer = document.querySelectorAll("#tamarind_container"),
		peachContainer = document.querySelectorAll("#peach_container"),
		cherriesContainer = document.querySelectorAll("#cherries_container"),
		papayaContainer = document.querySelectorAll("#papaya_container"),
		coconutContainer = document.querySelectorAll("#coconut_container"),
		lemonContainer = document.querySelectorAll("#lemon_container"),
		appleContainer = document.querySelectorAll("#apple_container");

		
	//FUNCTIONS

	function logMyId(){
		console.log(this.id);
	}


	//EVENTS
	avocadoContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	bananaContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	watermelonContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	kiwiContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	grapesContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	tamarindContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	peachContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	cherriesContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	papayaContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	coconutContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	lemonContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	appleContainer.forEach(item => {
		item.addEventListener("click", logMyId);
	});


})();