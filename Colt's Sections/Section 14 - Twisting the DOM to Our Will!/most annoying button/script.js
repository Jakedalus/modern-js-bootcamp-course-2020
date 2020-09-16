const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
	console.log('hover');
	const height = Math.random() * window.innerHeight;
	const width = Math.random() * window.innerWidth;
	btn.style.left = width + 'px';
	btn.style.top = height + 'px';
});

btn.addEventListener('click', function() {
	btn.innerText = 'You got me!!';
	document.body.style.backgroundColor = 'green';
});
