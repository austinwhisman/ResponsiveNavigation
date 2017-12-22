
window.addEventListener("scroll", function(e){

	var body = document.querySelector('body');
	var button = document.querySelector('#scroll-top')
	var position = window.scrollY || window.pageYOffset;
	//sets logo on header to t on the right
	if(position >= 250 && !body.classList.contains("pinned-250")){
		body.classList.add('pinned-250');
	}
	//sets logoon header to logo in the center
	if(position < 250 && body.classList.contains("pinned-250")){
		body.classList.remove("pinned-250");
	}
	//moves button on to screen
	if (position >= 500 && !button.classList.contains('in-view') ){
		button.classList.add('in-view');
	}
	//moves button off of screen
	if (position < 500 && button.classList.contains('in-view') ){
		button.classList.remove('in-view');
	}
});


