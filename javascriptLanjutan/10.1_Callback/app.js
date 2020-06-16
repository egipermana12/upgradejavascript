// const mhs = [
//     {
//         "nama" : "Sandika Galih",
//         "nrp"  : "123456",
//         "email": "sandikaga12@gmail.com",
//         "idDosenwali" : 1
//     },
//     {
//         "nama" : "Dody Feryantor",
//         "nrp"  : "123457",
//         "email": "dody111@gmail.com",
//         "idDosenwali" : 2
//     },
//     {
//         "nama" : "Erik Doank",
//         "nrp"  : "123458",
//         "email": "3rik@gmail.com",
//         "idDosenwali" : 1
//     }
// ];


// //percobann untuk syncronus higher order function
// console.log('mulai');
// mhs.forEach(m => console.log(m.nama));
// console.log('selesai');

//precobaan dengan asyncronus callback
// function getData(url, success, error) {   //success dan error merupakan callback

//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }


// console.log('mulai');

// getData('mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
//     //untuk callback error
// });

// console.log('selesai');


//coba dengan jQuery
console.log('mulai');
$.ajax({
    url : 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (error) => {
        console.log(error.responseText);
    }
})

console.log('selesai');