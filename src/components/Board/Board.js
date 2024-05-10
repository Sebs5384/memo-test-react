import { useMatchingState } from "../../hooks/index";
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
                        console.log(card);
                        const playerCard = card.replace(/-\d$/, "");
                        const playerName = card.split(".")[0].split("/").pop()
                        return (
                            <div key={`memo-cards-${index + 1}`} className={"col-3 gy-1 cards-container board-container"}>
                                <Card 
                                    cardKey={`${playerName}`}
                                    image={playerCard}
                                    backCardSprite={backCardSprite}
                                    gameStarted={gameStarted}
                                    isMatching={matchedPairs.includes(playerName)}
                                    isActive={activeCards.some(card => card.key === playerName)}
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