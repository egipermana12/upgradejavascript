const btnWarna = document.getElementById('btnWarna');

btnWarna.addEventListener('click', () => {
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
});


const btnacakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
btnacakWarna.appendChild(teksTombol);

btnacakWarna.setAttribute('type', 'button');

btnWarna.after(btnacakWarna);


btnacakWarna.addEventListener('click', () => {

	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);

	document.body.style.backgroundColor = 'rgb('+ r +',' + g + ',' + b +')';

});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', () => {
	// alert('ok');

	// console.log(sMerah.value); //mengambil semua nilai 

	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

});

sHijau.addEventListener('input', () => {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', () => {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});



document.body.addEventListener('mousemove', (event) => {
	// console.log(event.clientX);

	//tentukan ukuran browser
	// console.log(window.innerWidth);

	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);

	document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)';

});