const playersName = [
    "martinez", 
    "molina", 
    "montiel", 
    "otamendi", 
    "tagliaflico", 
    "dePaul", 
    "almada", 
    "macallister", 
    "diMaria", 
    "messi", 
    "alvarez", 
    "scaloni"
];
const MAX_CARDS_PER_SET = 12;

function getPlayerCards(card, players = playersName) {
    const playerCards = players.map((name, index) => {
        return card.concat(`${index + 1}-${name}`)
    });

    return playerCards;
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
    });

    return array;
};

export { getPlayerCards, getSetOfCards, shuffleArray };