console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submitted Successfully!');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



function compliment(evt) {
	evt.preventDefault();
	
	alert('You are GREAT!');
}

let cat = document.querySelector('#cat');
cat.addEventListener("mouseover", compliment);
