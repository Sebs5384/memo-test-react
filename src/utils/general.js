const playersName = [
    "player-1-martinez", 
    "player-2-molina", 
    "player-3-montiel", 
    "player-4-otamendi", 
    "player-5-tagliafico", 
    "player-6-dePaul", 
    "player-7-almada", 
    "player-8-macallister", 
    "player-9-diMaria", 
    "player-10-messi", 
    "player-11-alvarez", 
    "player-12-scaloni"
];
const MAX_CARDS_PER_SET = 12;

function getPlayerCards(cards = playersName) {
    const playerCards = cards.map((card) => {
        const playerCard = require(`../assets/images/players/${card}.jpg`);
        return  playerCard;
    });
    
    const shuffledPlayerCards = shuffleArray(playerCards);
    const setOfCards = getSetOfCards(shuffledPlayerCards);
    const shuffledSetOfCards = shuffleArray(setOfCards);    

    return shuffledSetOfCards;
};

function getSetOfCards(cards){
    let setOfCards = [];

    for(let i = 0; i < cards.length; i++) {
        for(let j = 0; j < cards.length; j++) {
            if(setOfCards.includes(cards[i])) {
                continue;
            } else if(cards[i] === cards[j]) {
                setOfCards.push(cards[i], cards[j]);
            };
        };

        if(setOfCards.length === MAX_CARDS_PER_SET) {
            break;
        };
    };

    return setOfCards;
};

function shuffleArray(array) {
    array.map((item, index) => {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
        
        return array;
    });

    return array;
};

function getUnflippedCard() {
    const unflippedCardSprite = require(`../assets/images/misc/unflipped-card.jpg`);

    return unflippedCardSprite;
};

export { getPlayerCards, getSetOfCards, shuffleArray, getUnflippedCard };