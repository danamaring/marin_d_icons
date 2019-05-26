(() => {
	console.log("fired");


	//VARIABLES

	let icons_section = document.querySelectorAll("#iconsSection img"),
		avocado_icon = document.querySelector(".avocadoIcon"),
		banana_icon = document.querySelector(".bananaIcon"),
		watermelon_icon = document.querySelector(".watermelonIcon"),
		kiwi_icon = document.querySelector(".kiwiIcon"),
		grapes_icon = document.querySelector(".grapesIcon"),
		tamarind_icon = document.querySelector(".tamarindIcon"),
		peach_icon = document.querySelector(".peachIcon"),
		cherries_icon = document.querySelector(".cherriesIcon"),
		papaya_icon = document.querySelector(".papayaIcon"),
		coconut_icon = document.querySelector(".coconutIcon"),
		lemon_icon = document.querySelector(".lemonIcon"),
		apple_icon = document.querySelector(".appleIcon");

		
	//FUNCTIONS

	function logMyId(){
		console.log(this.id);
	}


	//EVENTS
	icons_section.forEach(item => {
		item.addEventListener("click", logMyId);
	});
})();