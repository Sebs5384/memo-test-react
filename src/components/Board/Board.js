import { useMatchingState } from "../../hooks/index";
import { getPlayerName } from "../../utils/general";
import Card from "../Card/Card";
import "./Board.css";
import PropTypes from "prop-types";

function Board({ gameStarted, cards, backCardSprite }) {
    const { activeCards, matchedPairs, handleMatching } = useMatchingState();

    return (
        <div className={"container text-center"}>
            <div id="board">
                <div className="row gx-1">
                    {cards.map((card, index) => {
                        const { playerSpriteName, playerNameWithSuffix } = getPlayerName(card);
                        
                        return (
                            <div key={`memo-cards-${index + 1}`} className={"col-3 gy-1 cards-container board-container"}>
                                <Card 
                                    cardKey={`${playerNameWithSuffix}`}
                                    image={playerSpriteName}
                                    backCardSprite={backCardSprite}
                                    gameStarted={gameStarted}
                                    isMatching={matchedPairs.includes(playerNameWithSuffix)}
                                    isActive={activeCards.some(card => card === playerNameWithSuffix)}
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
    cards: PropTypes.array,
    unflippedCard: PropTypes.string
};

export default Board;   