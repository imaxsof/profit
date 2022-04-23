document.querySelector('#submit').addEventListener('click', function() {
	var www = document.querySelector('#price').value * 1000 / document.querySelector('#ves').value;

	document.querySelector('#price').value = document.querySelector('#ves').value = '';

	document.querySelector('.result').append(Math.round(www) + ' • ');
});

document.querySelector('#clear').addEventListener('click', function() {
	document.querySelector('.result').innerHTML = '';
});

document.querySelector('.result').innerHTML = window.Telegram.WebApp;
