//DOM Selection

//getElementById
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'violet';
judul.innerHTML = 'ganti dari DOM';

//getElementsByTagName -> mengembalikan html collection
const p = document.getElementsByTagName('p');
//cara lila
// p[2].style.backgroundColor = 'cyan';
for(let i=0; i<p.length; i++){
	p[i].style.backgroundColor = 'cyan';
}

const h1 = document.getElementsByTagName('h1')[0]; //[0] mengambil array ke 0
h1.style.fontSize = '50px';

//getElementsByClassName() mengambilkan HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini dirubah dari javascript';


//querySelector() -> menghasilkan element
const p4 = document.querySelector('#b p'); //cari id b dengan tag p
p4.style.color = 'orange';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)'); //cari li yang ke 2
li2.style.backgroundColor = 'Orange';


//querySelectorAll()
const p2 = document.querySelectorAll('p');
// p2[2].style.backgroundColor = 'violet';
for(let i = 0; i < p2.length; i++){
	p2[i].style.backgroundColor = 'lightblue';
}




