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
		strings: ["I enjoy coding and developing side projects.<br>Outside programming, I study UX design and explore new frameworks."],
		typeSpeed: 100,
		backSpeed: 0,
		showCursor: true,
		contentType: 'html',
		loop: false
	});
});
