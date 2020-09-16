const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'indigo',
	'violet'
];

const boxes = document.querySelector('#boxes');
const h1 = document.querySelector('h1');

const changeColor = function() {
	// console.log(this.style.backgroundColor);
	h1.style.color = this.style.backgroundColor;
};

for (let color of colors) {
	const box = document.createElement('div');
	box.classList.add('box');
	box.style.backgroundColor = color;
	boxes.append(box);
	box.addEventListener('click', changeColor);
	box.addEventListener('mouseover', function() {
		console.log(this);
		this.style.opacity = '0.5';
	});
	box.addEventListener('mouseleave', function() {
		console.log(this);
		this.style.opacity = '1';
	});
}
