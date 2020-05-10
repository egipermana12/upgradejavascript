function getPilihanComputer() {

	const comp = Math.random();

	if(comp < 0.34) return 'gajah';
	if(comp >= 0.34 && comp < 0.67) return 'orang';
	return 'semut';

}

function getHasil(c, p) {

	if(p == c) return 'SERI!';
	if(p == 'gajah') return (c == 'orang') ? 'MENANG!' : 'KALAH!';
	if(p == 'orang') return (c == 'gajah') ? 'KALAH!' : 'MENANG!';
	if(p == 'semut') return (c == 'orang') ? 'KALAH!' : 'MENANG';

}

//untuk animasi pilihan komputer
function putar() {

	const imgComputer = document.querySelector('.img-komputer');

	const gambar = ['gajah', 'semut', 'orang'];

	let i = 0;
	const waktuMulai = new Date().getTime();

	setInterval(function() {

		if( new Date().getTime() - waktuMulai > 1000 ) {
			clearInterval;
			return
		}

		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');

		if(i == gambar.length) {
			i = 0;
		}

	}, 100);

}


//cara efektif untuk pilihan player
const pilihan = document.querySelectorAll('li img');
// console.log(pilihan);
pilihan.forEach(function(pilihan) {

	pilihan.addEventListener('click', () => {

		const pilComputer = getPilihanComputer();
		const pilPlayer = pilihan.className; //ngambil nama class
		

		const hasil = getHasil(pilComputer, pilPlayer);

		putar();

		setTimeout( function() {

			const imgComputer = document.querySelector('.img-komputer');
			imgComputer.setAttribute('src', 'img/' + pilComputer + '.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
			
		}, 1000);
		

		// const imgComputer = document.querySelector('.img-komputer');
		// imgComputer.setAttribute('src', 'img/' + pilComputer + '.png');

		// const info = document.querySelector('.info');
		// info.innerHTML = hasil;

	});

});



// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', () => {

// 	const pilComputer = getPilihanComputer();
// 	const pilPlayer = pGajah.className; //ngambil nama class
// 	// console.log(pilPlayer +' '+pilComputer);

// 	const hasil = getHasil(pilComputer, pilPlayer);
// 	// console.log(hasil);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;

// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', () => {

// 	const pilComputer = getPilihanComputer();
// 	const pilPlayer = pOrang.className; //ngambil nama class
// 	// console.log(pilPlayer +' '+pilComputer);

// 	const hasil = getHasil(pilComputer, pilPlayer);
// 	// console.log(hasil);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;

// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', () => {

// 	const pilComputer = getPilihanComputer();
// 	const pilPlayer = pSemut.className; //ngambil nama class
// 	// console.log(pilPlayer +' '+pilComputer);

// 	const hasil = getHasil(pilComputer, pilPlayer);
// 	// console.log(hasil);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;

// });