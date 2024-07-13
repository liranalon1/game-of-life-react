import './Controls.scss';
import { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Button from './Button/Button';

const Controls = () => {
  const buttons = [
    { text: 'Init Board', onClick: initBoard },
    { text: 'Next Gen', onClick: nextGen },
    { text: 'Save Gen', onClick: saveGen },
    { text: 'Load Last Gen', onClick: loadGen }
  ];

  const [shouldInitBoard, setShouldInitBoard] = useState(true);
  const { board, boardSize, setBoard, setBoardSize } = useContext(GameContext);

  function initBoard() {
    const newBoard = Array(boardSize)
      .fill()
      .map(() => Array(boardSize).fill().map(() => Math.random() > 0.7));
      
    setBoard(newBoard);
  };

  function nextGen() {
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

  function saveGen() {
    const gameState = { board, boardSize };
    localStorage.setItem('gameState', JSON.stringify(gameState));
  };

  function loadGen() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
      const { board, boardSize } = JSON.parse(savedState);
      setBoard(board);
      setBoardSize(boardSize);
      setShouldInitBoard(false);
    }
  };

  useEffect(() => {
    if (shouldInitBoard) {
      initBoard();
    } else {
      setShouldInitBoard(true);
    }
  }, [boardSize]);

  return (
    <div className='controls flex'>
      {buttons.map((button, index) => (
        <Button key={index} text={button.text} onClick={button.onClick} />
      ))}
    </div>
  );
};

export default Controls;
