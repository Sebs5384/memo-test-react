import Card from "../Card/Card";
import "./Board.css";
import PropTypes from "prop-types";
import cx from "classnames";

function Board({ gameStarted, cards, unflippedCard }) {
    return (
        <div className={"container text-center"}>
            <div id="board">
                <div className="row gx-1">
                    {cards.map((card, index) => {
                        return (
                            <div key={`memo-cards-${index + 1}`} className={"col-3 gy-1 cards-container board-container"}>
                                <Card 
                                    key={`card-${index + 1}`} 
                                    image={card} 
                                    unflippedCard={unflippedCard}
                                    gameStarted={gameStarted}
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