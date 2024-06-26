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

function getCards(gameStarted) {
    const playerCards = getPlayerCards();
    const unflippedCardSprite = getUnflippedCard();
    const cards = gameStarted ? playerCards : Array(12).fill(unflippedCardSprite);

    return { cards, unflippedCardSprite };
};

function getPlayerCards(cards = playersName) {
    const playerPathImages = cards.map((card) => {
        const playerPathImage = require(`../assets/images/players/${card}.jpg`);
        return  playerPathImage;
    });
    
    const shuffledPlayerCards = shuffleArray(playerPathImages);
    const setOfCards = getSetOfCards(shuffledPlayerCards);
    const shuffledSetOfCards = shuffleArray(setOfCards);    

    const playerCards = shuffledSetOfCards.map((card, index) => {
        const { playerSpriteName, playerNameWithSuffix } = getPlayerName(card);
        const playerCardPathImage = playerPathImages[index];

        return {
            spriteName: playerSpriteName,
            nameWithSuffix: playerNameWithSuffix,
            playerCard: playerCardPathImage
        };
    });

    return playerCards
};

function getSetOfCards(cards){
    const MAX_CARDS_PER_SET = 12;
    let setOfCards = [];

    for(let i = 0; i < cards.length; i++) {
        for(let j = 0; j < cards.length; j++) {
            if(setOfCards.includes(cards[i])) {
                continue;
            } else if(cards[i] === cards[j]) {
                setOfCards.push(`${cards[i]}-1`, `${cards[j]}-2`);
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

function getPlayerName(card){
    const playerSpriteName = card.replace(/-\d$/, "");
    const playerName = card.split(".")[0].split("/").pop();
    const cardSuffix = card.split(".")[2].replace("jpg", "");
    const playerNameWithSuffix = `${playerName}${cardSuffix}`;

    return { playerSpriteName, playerNameWithSuffix }
};

export default getCards;