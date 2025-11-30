import './EasyGamePage.css';
import { useGame } from '../context/GameContext';
import { useEffect } from 'react';

function EasyGamePage(){
    const {board, setBoard, initialBoard, timer, gameStatus, startNewGame, resetGame, isValidPlacement, checkWin, setGameStatus  } = useGame();

    useEffect (()=>{
        startNewGame('easy');
    }, []);
    console.log('Board:', board);
    console.log('Timer:', timer);
    console.log('Game Status:', gameStatus);

    const handleCellChange = (index, value) => {
        if(initialBoard[index] !== 0) return;

        if(value !== '' && (isNaN(value) || value <1 || value > 6)) return;

        const newBoard = [...board];
        newBoard[index] = value === '' ? 0 : parseInt(value);
        setBoard(newBoard);

        if(checkWin(newBoard, 6)){
            setGameStatus('won');
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart( 2, '0')}`
    };


    return(
        <div className='easy-game-page'>
        <header className='game-header'>
            <h1 className='game-title'>Easy Sudoku</h1>
        </header>

        <div className='hud'>
            <div className='timer'>{formatTime(timer)}</div>
        </div>

        {board.length === 36 ? (
        <div className='board' role='grid' aria-label='6 by 6 sudoku grid'>
        {board.map((value, index) => (
            <input
            key={index}
            className={`cell ${initialBoard[index] !== 0 ? 'prefilled' : ''} ${value !== 0 && !isValidPlacement(board, index, value, 6 ) ? 'invalid' : ''}`}
            type='text'
            maxLength='1'
            value={value === 0 ? '' : value}
            readOnly={initialBoard[index] !== 0}
            onChange={(e) => handleCellChange(index, e.target.value)}
            aria-label={`row ${Math.floor(index / 6) +1} col ${(index % 6)+ 1}`}
            />))}
        
        </div>
        ) : (
            <div className="board">Loading...</div>
        )}
        <div className='game-actions'>
            <button className='btn btn-new' onClick={() => startNewGame('easy')}>New Game</button>
            <button className='btn btn-reset' onClick={resetGame}>Reset</button>
    
        </div>
        {gameStatus == 'won' &&(
            <div className='win-message'>
                Congratulations! You solved it in {formatTime(timer)}!
                </div>
        )}
        </div>
    );
}

export default EasyGamePage;