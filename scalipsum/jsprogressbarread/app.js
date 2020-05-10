window.addEventListener('scroll', handleScroll);

function handleScroll() {
	const docHeight = document.body.scrollHeight;
	const windowHeight = window.innerHeight;
	const scrollTop = window.pageYOffset;

	const trackLenght = docHeight - windowHeight;
	const percentage = Math.floor((scrollTop / trackLenght) * 100);

	document.querySelector('.progress_bar').style.right = 100 - percentage + '%';

	console.log(percentage);
}

