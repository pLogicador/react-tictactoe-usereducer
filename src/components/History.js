import React, { useContext } from "react";
import { v4 as uuid } from 'uuid';

import { GameContext } from "../contexts/GameContext";

export default function History() {
    const { 
        history, 
        setHistory, 
        setSquares, 
        setIsXNext,
        setWhoIsWinner, 
    } = useContext(GameContext);

    function handleClick(index) {
        const newHistory = [...history];
        newHistory.splice(index, Number.MAX_SAFE_INTEGER);
        setHistory(newHistory);

        setSquares(history[index].squares);
        setIsXNext(history[index].isNext);
        setWhoIsWinner(history[index].whoIsWinner);
    }

    return (
        <div>
            {history.map((date, index) => (
                <div key={uuid()} className="history">
                    <button type="button" onClick={() => handleClick(index)}>
                        Return to move {index}
                    </button>
                </div>
            ))}
        </div>
    );
}
