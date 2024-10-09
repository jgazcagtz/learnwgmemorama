// Get DOM Elements
const gameBoard = document.getElementById('game-board');
const movesCounter = document.getElementById('moves');
const timerElement = document.getElementById('timer');
const restartButton = document.getElementById('restart');
const levelElement = document.getElementById('level');
const scoreElement = document.getElementById('score');
const levelModal = document.getElementById('level-modal');
const modalMessage = document.getElementById('modal-message');
const nextLevelButton = document.getElementById('next-level');
const playAgainButton = document.getElementById('play-again');
const inputModal = document.getElementById('input-modal');
const userInput = document.getElementById('user-input');
const submitInputButton = document.getElementById('submit-input');
const gameCompleteModal = document.getElementById('game-complete-modal');
const finalScoreElement = document.getElementById('final-score');
const restartGameButton = document.getElementById('restart-game');

// Updated Emoji and Spanish Words Array (Replaced some less common emojis with more common ones)
let wordPairs = [
    { emoji: '💧', word: 'Agua' },
    { emoji: '🧊', word: 'Hielo' },
    { emoji: '🔥', word: 'Fuego' },
    { emoji: '🌊', word: 'Ola' },
    { emoji: '🍚', word: 'Arroz' },
    { emoji: '🍞', word: 'Pan' },
    { emoji: '🥐', word: 'Croissant' },
    { emoji: '🥖', word: 'Baguette' },
    { emoji: '🧈', word: 'Mantequilla' },
    { emoji: '🥯', word: 'Bagel' },
    { emoji: '🧃', word: 'Jugo' },
    { emoji: '🥛', word: 'Leche' },
    { emoji: '🍯', word: 'Miel' },
    { emoji: '🍇', word: 'Uva' },
    { emoji: '🍉', word: 'Sandía' },
    { emoji: '🍌', word: 'Plátano' },
    { emoji: '🥭', word: 'Mango' },
    { emoji: '🍍', word: 'Piña' },
    { emoji: '🥥', word: 'Coco' },
    { emoji: '🥑', word: 'Aguacate' },
    { emoji: '🍆', word: 'Berenjena' },
    { emoji: '🥕', word: 'Zanahoria' },
    { emoji: '🌽', word: 'Maíz' },
    { emoji: '🥔', word: 'Papa' },
    { emoji: '🧅', word: 'Cebolla' },
    { emoji: '🥬', word: 'Lechuga' },
    { emoji: '🍋', word: 'Limón' },
    { emoji: '🍊', word: 'Naranja' },
    { emoji: '🍒', word: 'Cereza' },
    { emoji: '🍑', word: 'Durazno' },
    { emoji: '🍄', word: 'Hongo' },
    { emoji: '🧄', word: 'Ajo' },
    { emoji: '🍖', word: 'Carne' },
    { emoji: '🍗', word: 'Pollo' },
    { emoji: '🥩', word: 'Bistec' },
    { emoji: '🥓', word: 'Tocino' },
    { emoji: '🍤', word: 'Camarón' },
    { emoji: '🧆', word: 'Falafel' },
    { emoji: '🍥', word: 'Rollo' },
    { emoji: '🍣', word: 'Sushi' },
    { emoji: '🍜', word: 'Ramen' },
    { emoji: '🥗', word: 'Ensalada' },
    { emoji: '🍿', word: 'Palomitas' },
    { emoji: '🥧', word: 'Tarta' },
    { emoji: '🍪', word: 'Galleta' },
    { emoji: '🍬', word: 'Dulce' },
    { emoji: '🍭', word: 'Chupete' },
    { emoji: '🍹', word: 'Coctel' },
    { emoji: '🧃', word: 'Jugo' },
    { emoji: '🍵', word: 'Té' },
    { emoji: '🧋', word: 'Boba' },
    { emoji: '🧃', word: 'Bebida' },
    { emoji: '🥤', word: 'Refresco' },
    { emoji: '👕', word: 'Camiseta' },
    { emoji: '👔', word: 'Corbata' },
    { emoji: '👖', word: 'Pantalón' },
    { emoji: '🧣', word: 'Bufanda' },
    { emoji: '🧤', word: 'Guante' },
    { emoji: '🧦', word: 'Calcetines' },
    { emoji: '👗', word: 'Vestido' },
    { emoji: '👘', word: 'Kimono' },
    { emoji: '👙', word: 'Bikini' },
    { emoji: '🩱', word: 'Traje de Baño' },
    { emoji: '🩳', word: 'Shorts' },
    { emoji: '👠', word: 'Tacón' },
    { emoji: '👡', word: 'Sandalia' },
    { emoji: '👞', word: 'Zapato' },
    { emoji: '👟', word: 'Tenis' },
    { emoji: '🧳', word: 'Maleta' },
    { emoji: '🎒', word: 'Mochila' },
    { emoji: '👛', word: 'Monedero' },
    { emoji: '👜', word: 'Bolso' },
    { emoji: '🧲', word: 'Imán' },
    { emoji: '🔑', word: 'Llave' },
    { emoji: '💳', word: 'Tarjeta' },
    { emoji: '🖊️', word: 'Pluma' },
    { emoji: '📌', word: 'Pin' },
    { emoji: '📏', word: 'Regla' },
    { emoji: '📂', word: 'Carpeta' },
    { emoji: '📆', word: 'Calendario' },
    { emoji: '🖍️', word: 'Crayón' },
    { emoji: '📎', word: 'Clip' },
    { emoji: '📐', word: 'Compás' },
    { emoji: '✏️', word: 'Lápiz' },
    { emoji: '✂️', word: 'Tijeras' },
    { emoji: '🖌️', word: 'Brocha' },
    { emoji: '🏠', word: 'Casa' },
    { emoji: '🏢', word: 'Edificio' },
    { emoji: '🏛️', word: 'Museo' },
    { emoji: '⛪', word: 'Iglesia' },
    { emoji: '🏖️', word: 'Playa' },
    { emoji: '🌄', word: 'Montaña' },
    { emoji: '🗻', word: 'Volcán' },
    { emoji: '🌋', word: 'Erupción' },
    { emoji: '🌵', word: 'Cactus' },
    { emoji: '🌲', word: 'Pino' },
    { emoji: '🌿', word: 'Hierba' },
    { emoji: '🌻', word: 'Girasol' },
    { emoji: '🌼', word: 'Flor' },
    { emoji: '🦋', word: 'Mariposa' },
    { emoji: '🐝', word: 'Abeja' },
    { emoji: '🐒', word: 'Mono' },
    { emoji: '🐷', word: 'Cerdo' },
    { emoji: '🦁', word: 'León' },
    { emoji: '🐎', word: 'Caballo' },
    { emoji: '🦆', word: 'Pato' },
    { emoji: '🐔', word: 'Gallina' },
    { emoji: '🦉', word: 'Búho' },
    { emoji: '🦅', word: 'Águila' },
    { emoji: '🐦', word: 'Pájaro' },
    { emoji: '🐍', word: 'Serpiente' },
    { emoji: '🦑', word: 'Calamar' },
    { emoji: '🐠', word: 'Pez' },
    { emoji: '🦞', word: 'Langosta' },
    { emoji: '🦋', word: 'Mariposa' },
    { emoji: '🐛', word: 'Oruga' },
    { emoji: '🌌', word: 'Galaxia' },
    { emoji: '🌍', word: 'Mundo' },
    { emoji: '🪐', word: 'Planeta' },
    { emoji: '🌑', word: 'Luna Nueva' },
    { emoji: '🌒', word: 'Luna Creciente' },
    { emoji: '🌓', word: 'Cuarto Creciente' },
    { emoji: '🌕', word: 'Luna Llena' },
    { emoji: '🌤️', word: 'Sol y Nubes' },
    { emoji: '🌧️', word: 'Lluvia' },
    { emoji: '⛈️', word: 'Tormenta' },
    { emoji: '☃️', word: 'Muñeco de Nieve' },
    { emoji: '💨', word: 'Viento' },
    { emoji: '⚡', word: 'Rayo' },
    { emoji: '🔥', word: 'Fuego' },
    { emoji: '💥', word: 'Explosión' },
    { emoji: '🎈', word: 'Globo' },
    { emoji: '🎀', word: 'Moño' },
    { emoji: '🎂', word: 'Pastel' },
    { emoji: '🎁', word: 'Regalo' },
    { emoji: '🎫', word: 'Boleto' },
    { emoji: '💌', word: 'Carta' },
    { emoji: '💎', word: 'Diamante' },
    { emoji: '🔮', word: 'Bola de Cristal' },
    { emoji: '💍', word: 'Anillo' },
    { emoji: '🚩', word: 'Bandera' },
    { emoji: '📫', word: 'Correo' },
    { emoji: '💌', word: 'Tarjeta' },
    { emoji: '💤', word: 'Dormir' },
    { emoji: '🔑', word: 'Llave' },
    { emoji: '🌽', word: 'Esquite' },
    { emoji: '🦐', word: 'Ceviche' },
    { emoji: '🌮', word: 'Taco' },
    { emoji: '🍲', word: 'Pozole' },
    { emoji: '🍛', word: 'Tamal' },
    { emoji: '🍫', word: 'Chocolate' },
    { emoji: '🍠', word: 'Camote' },
    { emoji: '🥒', word: 'Pepino' },
    { emoji: '🥥', word: 'Coco' },
    { emoji: '🍯', word: 'Miel' },
    { emoji: '🍸', word: 'Tequila' },
    { emoji: '🍷', word: 'Vino' },
    { emoji: '☕', word: 'Café' },
];



// Variable to store the current matched word
let currentMatchedWord = '';

// Game State Variables
let currentLevel = 1;
const pairsPerLevel = 10; // Number of pairs per level
const totalLevels = Math.ceil(wordPairs.length / pairsPerLevel);
let score = 0;
let moves = 0;
let matches = 0;
let timer;
let seconds = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Initialize the game
function initGame() {
    // Reset game state variables
    currentLevel = 1;
    score = 0;
    moves = 0;
    matches = 0;
    seconds = 0;
    
    // Update UI elements
    levelElement.textContent = currentLevel;
    scoreElement.textContent = score;
    movesCounter.textContent = moves;
    timerElement.textContent = formatTime(seconds);
    
    // Shuffle the entire wordPairs array to ensure randomness across all levels
    wordPairs = shuffle(wordPairs);
    
    // Setup the first level
    setupLevel();
    
    // Start the timer
    startTimer();
}

// Setup current level
function setupLevel() {
    // Clear previous board
    gameBoard.innerHTML = '';

    // Determine number of pairs for the current level
    const startIndex = (currentLevel - 1) * pairsPerLevel;
    const endIndex = startIndex + pairsPerLevel;
    const currentPairs = wordPairs.slice(startIndex, endIndex);

    // Create card objects: one emoji and one word per pair
    let cardArray = [];
    currentPairs.forEach((pair, index) => {
        cardArray.push({
            id: index,
            type: 'emoji',
            content: pair.emoji,
            pairId: index
        });
        cardArray.push({
            id: index + pairsPerLevel, // Ensure unique id
            type: 'word',
            content: pair.word,
            pairId: index
        });
    });

    // Shuffle the cards for the current level
    cardArray = shuffle(cardArray);

    // Generate card elements
    cardArray.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
        cardElement.dataset.type = card.type;
        cardElement.dataset.pairId = card.pairId;

        cardElement.innerHTML = `
            <div class="front">${card.content}</div>
            <div class="back"></div>
        `;

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

// Shuffle function using Fisher-Yates algorithm
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Flip card function
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    if (this.classList.contains('matched')) return;

    this.classList.add('flip');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    moves++;
    movesCounter.textContent = moves;

    checkForMatch();
}

// Check if two selected cards match
function checkForMatch() {
    const isSamePair = firstCard.dataset.pairId === secondCard.dataset.pairId;
    const isDifferentType = firstCard.dataset.type !== secondCard.dataset.type;

    if (isSamePair && isDifferentType) {
        // Store the correct word before prompting input
        currentMatchedWord = getCorrectWord();

        // It's a match; prompt user input
        promptUserInput();
    } else {
        // Not a match, flip back after delay
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1000);
    }
}

// Reset board state
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// Prompt user to type the Spanish word after a match
function promptUserInput() {
    inputModal.style.display = 'block';
    userInput.value = '';
    userInput.focus();
}

// Handle user input for matched pair
function handleUserInput() {
    const userAnswer = userInput.value.trim().toLowerCase();
    const correctWord = currentMatchedWord.toLowerCase();

    if (userAnswer === correctWord) {
        // Correct answer
        score += calculateScore(true, seconds);
        scoreElement.textContent = score;
        inputModal.style.display = 'none';
        markAsMatched();
        checkLevelCompletion();
    } else {
        // Incorrect answer, prompt to try again
        alert('Incorrecto. Por favor, inténtalo de nuevo.');
        // Flip the cards back and allow the user to attempt the match again
        inputModal.style.display = 'none';
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }
}

// Mark the matched cards as matched
function markAsMatched() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetBoard();
    matches++;
}

// Get the correct word for the current matched pair
function getCorrectWord() {
    // Determine which card is the word
    if (firstCard.dataset.type === 'word') {
        return firstCard.textContent.trim();
    } else {
        return secondCard.textContent.trim();
    }
}

// Calculate score based on user input
function calculateScore(isCorrect, timeTaken) {
    if (isCorrect) {
        const timeBonus = Math.max(100 - timeTaken, 20); // Bonus decreases with time
        return timeBonus;
    } else {
        return -20; // Penalty for incorrect answer
    }
}

// Check if the current level is completed after user input
function checkLevelCompletion() {
    if (matches === pairsPerLevel) {
        // Level completed
        clearInterval(timer);
        setTimeout(() => {
            levelModal.style.display = 'block';
            modalMessage.textContent = `Has completado el nivel ${currentLevel}.`;
        }, 500);
    }
}

// Timer functions
function startTimer() {
    timer = setInterval(() => {
        seconds++;
        timerElement.textContent = formatTime(seconds);
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    timerElement.textContent = '00:00';
}

function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

// Proceed to next level
function nextLevel() {
    levelModal.style.display = 'none';
    currentLevel++;
    if (currentLevel > totalLevels) {
        endGame();
    } else {
        matches = 0;
        moves = 0;
        seconds = 0;
        levelElement.textContent = currentLevel;
        movesCounter.textContent = moves;
        timerElement.textContent = formatTime(seconds);
        setupLevel();
        resetTimer();
        startTimer();
    }
}

// End game after final level
function endGame() {
    gameCompleteModal.style.display = 'block';
    finalScoreElement.textContent = score;
}

// Play again from level 1
function playAgain() {
    levelModal.style.display = 'none';
    gameCompleteModal.style.display = 'none';
    currentLevel = 1;
    score = 0;
    moves = 0;
    matches = 0;
    seconds = 0;
    levelElement.textContent = currentLevel;
    scoreElement.textContent = score;
    movesCounter.textContent = moves;
    timerElement.textContent = formatTime(seconds);
    wordPairs = shuffle(wordPairs); // Reshuffle all pairs for a fresh start
    setupLevel();
    resetTimer();
    startTimer();
}

// Reset the entire game
function resetGame() {
    clearInterval(timer);
    currentLevel = 1;
    score = 0;
    moves = 0;
    matches = 0;
    seconds = 0;
    levelElement.textContent = currentLevel;
    scoreElement.textContent = score;
    movesCounter.textContent = moves;
    timerElement.textContent = formatTime(seconds);
    wordPairs = shuffle(wordPairs); // Reshuffle all pairs for a fresh start
    setupLevel();
    resetTimer();
    startTimer();
    levelModal.style.display = 'none';
    gameCompleteModal.style.display = 'none';
}

// Event Listeners
restartButton.addEventListener('click', () => {
    resetGame();
});

nextLevelButton.addEventListener('click', () => {
    nextLevel();
});

playAgainButton.addEventListener('click', () => {
    playAgain();
});

submitInputButton.addEventListener('click', () => {
    handleUserInput();
});

// Also allow pressing Enter to submit input
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// Initialize on page load
window.onload = initGame;
