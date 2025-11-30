import { createContext, useContext, useState, useEffect } from "react";
const GameContext = createContext();

export function GameProvider({ children }) {

    const [board, setBoard] = useState([]);

    const [initialBoard, setInitialBoard] = useState([]);

    const [timer, setTimer] = useState(0);

    const [gameStatus, setGameStatus] = useState('idle');

    const [difficulty, setDifficulty] = useState('easy');

    useEffect(() => {
        let interval = null;

        if(gameStatus === 'playing'){
            interval = setInterval(()=> {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        }

        return () => {
            if(interval) clearInterval(interval);
        };
    }, [gameStatus]);

    const startNewGame = (diff) => {
        setDifficulty(diff);
        setTimer(0);
        setGameStatus('playing');

        let puzzles;
        let newBoard;

        if(diff == 'easy') {
            puzzles = [
               [ 5, 3, 0, 0, 2, 0,
                0, 0, 1, 5, 0, 3,
                3, 0, 0, 0, 0, 5,
                4, 0, 0, 0, 0, 6,
                6, 0, 3, 4, 0, 0,
                0, 4, 0, 0, 6, 2,
            ],
            [
                0, 2, 0, 5, 0, 4,
                4, 0, 5, 0, 2, 0,
                0, 4, 0, 2, 0, 1,
                2, 0, 1, 0, 4, 0,
                0, 0, 0, 4, 0, 2,
                1, 0, 4, 0, 3, 0 
            ],
            [
                1, 0, 0, 0, 0, 6,
                0, 6, 0, 0, 1, 0,
                0, 0, 5, 6, 0, 1,
                0, 0, 6, 5, 0, 0,
                0, 1, 0, 0, 6, 0,
                6, 0, 0, 0, 0, 5
            ],
            [
                0, 0, 2, 6, 0, 0,
                6, 0, 0, 0, 0, 2,
                2, 6, 0, 0, 3, 4,
                4, 3, 0, 0, 2, 6,
                3, 0, 0, 0, 0, 1,
                0, 0, 6, 3, 0, 0
            ]
        ];
        } else {
            puzzles = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0,
                6, 0, 0, 1, 9, 5, 0, 0, 0,
                0, 9, 8, 0, 0, 0, 0, 6, 0,
                8, 0, 0, 0, 6, 0, 0, 0, 3,
                4, 0, 0, 8, 0, 3, 0, 0, 1,
                7, 0, 0, 0, 2, 0, 0, 0, 6,
                0, 6, 0, 0, 0, 0, 2, 8, 0,
                0, 0, 0, 4, 1, 9, 0, 0, 5,
                0, 0, 0, 0, 8, 0, 0, 7, 9,

            ],
            [
                0, 0, 0, 2, 6, 0, 7, 0, 1,
                6, 8, 0, 0, 7, 0, 0, 9, 0,
                1, 9, 0, 0, 0, 4, 5, 0, 0,
                8, 2, 0, 1, 0, 0, 0, 4, 0,
                0, 0, 4, 6, 0, 2, 9, 0, 0,
                0, 5, 0, 0, 0, 3, 0, 2, 8,
                0, 0, 9, 3, 0, 0, 0, 7, 4,
                0, 4, 0, 0, 5, 0, 0, 3, 6,
                7, 0, 3, 0, 1, 8, 0, 0, 0
            ],
            [
                0, 2, 0, 6, 0, 8, 0, 0, 0,
                5, 8, 0, 0, 0, 9, 7, 0, 0,
                0, 0, 0, 0, 4, 0, 0, 0, 0,
                3, 7, 0, 0, 0, 0, 5, 0, 0,
                6, 0, 0, 0, 0, 0, 0, 0, 4,
                0, 0, 8, 0, 0, 0, 0, 1, 3,
                0, 0, 0, 0, 2, 0, 0, 0, 0,
                0, 0, 9, 8, 0, 0, 0, 3, 6,
                0, 0, 0, 3, 0, 6, 0, 9, 0
            ],
            [
                0, 0, 0, 6, 0, 0, 4, 0, 0,
                7, 0, 0, 0, 0, 3, 6, 0, 0,
                0, 0, 0, 0, 9, 1, 0, 8, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 5, 0, 1, 8, 0, 0, 0, 3,
                0, 0, 0, 3, 0, 6, 0, 4, 5,
                0, 4, 0, 2, 0, 0, 0, 6, 0,
                9, 0, 3, 0, 0, 0, 0, 0, 0,
                0, 2, 0, 0, 0, 0, 1, 0, 0
            ]
        ];
    }
        const randomIndex = Math.floor(Math.random() * puzzles.length);
        newBoard = puzzles[randomIndex];

        setBoard([...newBoard]);
        setInitialBoard([...newBoard]);
    };

    const resetGame = () => {
        setBoard([...initialBoard]);
        setTimer(0);
        setGameStatus('Playing');
    };

    const isValidPlacement = (boardToCheck, index, value, gridSize) => {
        if(value === 0) return true;

        const row = Math.floor(index / gridSize);
        const col = index % gridSize;

        for(let i = 0; i < gridSize; i++){
            if (i !== col && boardToCheck[row * gridSize + i] === value){
                return false;
            }
        }

        for(let i = 0; i < gridSize; i++){
            if(i !== row && boardToCheck[i * gridSize + col] == value){
                return false;
            }
        }

        const boxRows = gridSize === 6 ? 2 : 3;
        const boxCols = gridSize === 6 ? 3 : 3;
        const boxRowStart = Math.floor(row / boxRows) * boxRows;
        const boxColStart = Math.floor(col / boxCols) * boxCols;

        for(let r = boxRowStart; r<boxRowStart + boxRows; r++){
            for(let c = boxColStart; c<boxColStart + boxCols; c++){
                const boxIndex = r * gridSize + c;
                if(boxIndex !== index && boardToCheck[boxIndex]==value){
                    return false;
                }
            }
        }
        return true;
    }

    const checkWin = (currentBoard, gridSize) => {
        if(currentBoard.includes(0)) return false;
        
        for(let i = 0; i < currentBoard.length; i++){
            if(!isValidPlacement(currentBoard, i, currentBoard[i], gridSize)){
                return false;
            }
        }
        return true;
    };

    return(
        <GameContext.Provider value={{
            board,
            setBoard,
            initialBoard,
            setInitialBoard,
            timer,
            setTimer,
            gameStatus,
            setGameStatus,
            difficulty,
            setDifficulty,
            startNewGame,
            resetGame,
            isValidPlacement,
            checkWin
        }}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame(){
    return useContext(GameContext);
}

