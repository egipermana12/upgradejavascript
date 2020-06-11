document.addEventListener('DOMContentLoaded', () => {

//untuk load gambar 
const cardArray = [
	{
		name: 'fries',
		img: 'images/fries.png'
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png'
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png'
	},
	{
		name: 'pizza',
		img: 'images/pizza.png'
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png'
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png'
	},
	{
		name: 'fries',
		img: 'images/fries.png'
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png'
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png'
	},
	{
		name: 'pizza',
		img: 'images/pizza.png'
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png'
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png'
	},
]

//sort digunakan untuk mengurutkan array
cardArray.sort(() => 0.5 - Math.random())
// console.log(cardArray)

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

//proses pilih kartu
var cardChosen = []
var cardChosenId = []
const cardWon = []

//create board
function createBoard(){
	for(let i = 0; i < cardArray.length; i++){
		//create element digunakan untuk membuat element html
		var card = document.createElement('img')
		//set attribute untuk menambahkan element ke atribute
		card.setAttribute('src', 'images/blank.png')
		card.setAttribute('data-id', i)

		//menampilkan image pas di klik
		card.addEventListener('click', flipCard)

		//appendChild digunakan untuk menambahakn element terakahir dari sebuah node
		grid.appendChild(card)
	}
}

//fungsi flipCard
function flipCard() {
	//mengambil atribute data-id dari createboard
	var cardId = this.getAttribute('data-id')
	// console.log(cardId)

	cardChosen.push(cardArray[cardId].name)
	// console.log(cardChosen)

	cardChosenId.push(cardId)
	// console.log(cardChosenId)

	//untuk menampilkan image yang dipilih
	this.setAttribute('src', cardArray[cardId].img)

	if(cardChosen.length === 2) {
		setTimeout(checkForMatch, 500)
	}
}


//fungsi check game
function checkForMatch() {
	var cards = document.querySelectorAll('img');
	const optionOneId = cardChosenId[0]
	const optionTwoId = cardChosenId[1]

	if(cardChosen[0] === cardChosen[1]) {
		alert('You found a match')
		cards[optionOneId].setAttribute('src', 'images/white.png')
		cards[optionTwoId].setAttribute('src', 'images/white.png')
		cardWon.push(cardChosen)
	}else{
		cards[optionOneId].setAttribute('src', 'images/blank.png')
		cards[optionTwoId].setAttribute('src', 'images/blank.png')
		alert('Sorry, try again')
	}

	cardChosen = []
	cardChosenId = []
	resultDisplay.textContent = cardWon.length
	if(cardWon.length === cardArray.length/2) {
		resultDisplay.textContent = 'Congratulation! You found them all!'
	}

}


//untuk function create

createBoard()


//akhir function DOM
});