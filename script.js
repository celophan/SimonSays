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
    const cardArray = [
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
    const resultDisplay = document.querySelector('#result')
    const winningTitle = document.querySelector('#title')
    const resetButton = document.querySelector("#reset")
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

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
            // alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionOneId].style.pointerEvents = "none"
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].style.pointerEvents = "none"
            cardsWon.push(cardsChosen)
        } else {            
            cards[optionOneId].setAttribute('src', 'img/pokeball.png')
            cards[optionTwoId].setAttribute('src', 'img/pokeball.png')
            // alert('Nope.')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = ''
            winningTitle.textContent = 'Congratulations, you won !'
        }
    }
    
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        if(this.className == "flip1")
            this.className = "flip2";
        else
            this.className = "flip1";
        this.setAttribute('src', cardArray[cardId].img)
        
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)      
        }
        
    }

    function reset() {
        cardsChosen = []
        cardsChosenId = []
        cardsWon = []
        winningTitle.textContent = "SCORE : "
        cardArray.sort(() => 0.5 - Math.random())
        var cards = document.querySelectorAll('img')
        for (let i = 0; i < cardArray.length; i++) {
            cards[i].setAttribute('src', 'img/pokeball.png')
            cards[i].style.pointerEvents = ""
        }
        
    }

    resetButton.addEventListener('click', reset)

    createBoard()
})
