document.querySelector('button').addEventListener('click', function() {
	var www = document.querySelector('#price').value * 1000 / document.querySelector('#ves').value;

	document.querySelector('#price').value = document.querySelector('#ves').value = '';

	document.querySelector('.result').append(Math.round(www) + ' • ');
});