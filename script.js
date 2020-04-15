/*
I use these :
    push()
    querySelector()
    SetAttribute()
    getAttribute()
    appendChild()
    Math.random()
    sort()
    For loops
    createElement()
    Sprites taken from https://pokemondb.net/sprites
*/

document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [{
            name: 'blastoise',
            img: 'img/blastoise.png'
        },
        {
            name: 'charizard',
            img: 'img/charizard.png'
        },
        {
            name: 'clefable',
            img: 'img/clefable.png'
        },
        {
            name: 'cloyster',
            img: 'img/cloyster.png'
        },
        {
            name: 'dragonair',
            img: 'img/dragonair.png'
        },
        {
            name: 'kingler',
            img: 'img/kingler.png'
        },
        {
            name: 'blastoise',
            img: 'img/blastoise.png'
        },
        {
            name: 'charizard',
            img: 'img/charizard.png'
        },
        {
            name: 'clefable',
            img: 'img/clefable.png'
        },
        {
            name: 'cloyster',
            img: 'img/cloyster.png'
        },
        {
            name: 'dragonair',
            img: 'img/dragonair.png'
        },
        {
            name: 'kingler',
            img: 'img/kingler.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const comptDisplay = document.querySelector('#compt')
    const resultDisplay = document.querySelector('#result')
    const winningTitle = document.querySelector('#title')
    const resetButton = document.querySelector("#reset")
    var compt = 0
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    comptDisplay.textContent = compt
    resultDisplay.textContent = cardsWon.length

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/pokeball.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {

        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] != cardsChosenId[1]) {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
                //cards[optionOneId].style.pointerEvents = "none"
            cards[optionOneId].className = '';
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
                //cards[optionTwoId].style.pointerEvents = "none"
            cards[optionTwoId].className = '';
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/pokeball.png')
            cards[optionOneId].className = '';
            cards[optionTwoId].setAttribute('src', 'img/pokeball.png')
            cards[optionTwoId].className = '';
        }
        cardsChosen = []
        cardsChosenId = []
        document.getElementsByTagName("BODY")[0].style.pointerEvents = ""
        comptDisplay.textContent = compt += 1
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = cardsWon.length
            winningTitle.textContent = 'Congratulations, you won !'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        if (this.className == "flip1")
            this.className = "flip2";
        else
            this.className = "flip1";
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            document.getElementsByTagName("BODY")[0].style.pointerEvents = "none"
            setTimeout(checkForMatch, 500)
        }
    }

    function reset() {
        compt = 0
        cardsChosen = []
        cardsChosenId = []
        cardsWon = []
        cardArray.sort(() => 0.5 - Math.random())
        comptDisplay.textContent = compt
        resultDisplay.textContent = cardsWon.length
        winningTitle.textContent = ''
        var cards = document.querySelectorAll('img')
        for (let i = 0; i < cardArray.length; i++) {
            cards[i].setAttribute('src', 'img/pokeball.png')
            cards[i].style.pointerEvents = ""
        }

    }

    resetButton.addEventListener('click', reset)

    createBoard()
})