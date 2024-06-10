import Card from "../Card/Card";
import "./Board.css";
import PropTypes from "prop-types";

function Board({ gameStarted, gameEnded, cards, backCardSprite, activeCards, matchedPairs, handleMatching, boardOpacity, nullOpacity }) {
    return (
        <div className={"container text-center"}>
            <div id="board" style={{ opacity: boardOpacity }}>
                <div className="row gx-1">
                    {Object.entries(cards).map(([key, card], index) => {
                        const { spriteName, nameWithSuffix, playerCard } = card;	
                        return (
                            <div key={`memo-cards-${index + 1}`} className={"col-3 gy-1 cards-container board-container"}>
                                <Card 
                                    cardKey={`${nameWithSuffix}`}
                                    image={nullOpacity ? playerCard : spriteName}
                                    backCardSprite={backCardSprite}
                                    gameStarted={gameStarted}
                                    isMatching={nullOpacity ? true : matchedPairs.includes(nameWithSuffix)}
                                    isActive={nullOpacity ? true : activeCards.includes(nameWithSuffix)}
                                    handleMatching={handleMatching}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
Board.propTypes = {
    gameStarted: PropTypes.bool,
    gameEnded: PropTypes.bool,
    cards: PropTypes.array,
    backCardSprite: PropTypes.string,
    activeCards: PropTypes.array,
    matchedPairs: PropTypes.array,
    handleMatching: PropTypes.func,
    boardOpacity: PropTypes.number
};

export default Board;   