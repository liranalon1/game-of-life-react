import './Controls.scss';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const Controls = () => {
  const { initBoard, board, boardSize, setBoard, setBoardSize } = useContext(GameContext);

  const nextGen = () => {
    const newBoard = board.map(arr => [...arr]);
    const directions = [
      [1, 0], [1, 1], [0, 1], [-1, 1],
      [-1, 0], [-1, -1], [0, -1], [1, -1]
    ];

    const isAlive = (x, y) => board[x] && board[x][y];

    const countAliveNeighbors = (x, y) => {
      let aliveCount = 0;
      directions.forEach(([dx, dy]) => {
        const neighborX = x + dx;
        const neighborY = y + dy;
        if (isAlive(neighborX, neighborY)) {
          aliveCount++;
        }
      });
      return aliveCount;
    };

    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        const aliveNeighbors = countAliveNeighbors(i, j);

        if (board[i][j]) {
          if (aliveNeighbors < 2 || aliveNeighbors > 3) {
            newBoard[i][j] = false;
          }
        } else {
          if (aliveNeighbors === 3) {
            newBoard[i][j] = true;
          }
        }
      }
    }

    setBoard(newBoard);
  };

  const saveGen = () => {
    const gameState = { board, boardSize };
    localStorage.setItem('gameState', JSON.stringify(gameState));
  };

  const loadGen = () => {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
      const { board, boardSize } = JSON.parse(savedState);
      setBoard(board);
      setBoardSize(boardSize);
    }
  };

  return (
    <div className='controls flex'>
      <button className='btn' onClick={initBoard}>Initialize</button>
      <button className='btn' onClick={nextGen}>Next Gen</button>
      <button className='btn' onClick={saveGen}>Save Gen</button>
      <button className='btn' onClick={loadGen}>Load Last Gen</button>
    </div>
  );
};

export default Controls;
