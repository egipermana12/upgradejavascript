// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', () => {
// 	card.style.display = "none";
// });


//DOM Traversal
const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

//cara looping
// for(let i = 0; i < close.length; i++){
// 	close[i].addEventListener('click', function (e) {
// 		//bukan traversal
// 		// card[i].style.display = "none";

// 		//dg traversal mencari element parent terus dikasih style non
// 		// close[i].parentElement.style.display = 'none';

// 		//cara lain di kasih e pada function
// 		e.target.parentElement.style.display = 'none';
// 	});
// }

//cara foreach
// close.forEach((el) => {
// 	el.addEventListener('click', (e) => {
// 		e.target.parentElement.style.display = 'none';
// 	});
// });


//cara event bubbling
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
	// console.log(e.target);

	if(e.target.className == 'close'){
		e.target.parentElement.style.display = 'none';
	}

});