document.querySelectorAll('a[href="#"]').forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();
	});
});

document.addEventListener('DOMContentLoaded', function() {
	new Typed('#Yosshy', {
		strings: [
			"Yosshy's HomePage",
			"I'm Yosshy.<br>I am a Programmer."
		],
		typeSpeed: 100,
		backSpeed: 50,
		startDelay: 300,
		backDelay: 800,
		smartBackspace: false,
		showCursor: true,
		contentType: 'html',
		loop: false
	});
});




document.addEventListener('DOMContentLoaded', function() {
	new Typed('#about', {
		strings: ["I love coding and working on side projects.<br>When I'm not programming, I read about UX design and teach myself new frameworks."],
		typeSpeed: 100,
		backSpeed: 0,
		showCursor: true,
		contentType: 'html',
		loop: false
	});
});
