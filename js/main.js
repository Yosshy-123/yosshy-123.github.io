document.addEventListener('DOMContentLoaded', function() {
  new Typed('#Yosshy', {
    strings: ["Yosshy's HomePage"],
    typeSpeed: 100,
    backSpeed: 50,
    showCursor: true,
    contentType: 'html',
    loop: false,
    onComplete: function(self) {
      self.reset();
      setTimeout(function() {
        new Typed('#about', {
          strings: ["I'm Yosshy.<br>I am a Programmer."],
          typeSpeed: 100,
          backSpeed: 0,
          showCursor: true,
          contentType: 'html',
          loop: false
        });
      }, 500);
    }
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
