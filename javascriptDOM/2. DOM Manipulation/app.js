//innetHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Ini diubah dengan innerHTML</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>diganti dg innertHTML</p></div>';

//style
// const judul = document.querySelector('#judul');
// judul.style.color = 'violet';
// judul.style.backgroundColor = 'cyan';

//setAtribute
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'sandika');
// const a = document.querySelector('section#a a');

//classList
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');






//DOM MANIPULATION

//buat element baru
const pBaru = document.createElement('p'); //paragraf
const teksBaru = document.createTextNode('Paragraf Baru dari DOM');

//simpan kedalam paragraf dengan append, append adalah menambahkan
pBaru.appendChild(teksBaru);

//simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//dengan insertBefore
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru dg DOM insBef');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

//simpan kedalam html
ul.insertBefore(liBaru, li2);


//parentNode.removeChild()
const link = document.querySelector('a');
sectionA.removeChild(link);

//parentNode.replaceChild()
const sectionB = document.querySelector('#b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);