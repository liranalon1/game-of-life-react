import { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const [boardSize, setBoardSize] = useState(10);

  const initializeBoard = () => {
    const newBoard = Array(boardSize)
      .fill()
      .map(() => Array(boardSize).fill(false));
    setBoard(newBoard);
  };

  const randomizeBoard = () => {
    const newBoard = Array(boardSize)
      .fill()
      .map(() =>
        Array(boardSize).fill().map(() => Math.random() > 0.7)
      );
    setBoard(newBoard);
  };

  const evolveBoard = () => {
    const newBoard = board.map(arr => [...arr]);
    const directions = [
      [1, 0], [1, 1], [0, 1], [-1, 1],
      [-1, 0], [-1, -1], [0, -1], [1, -1]
    ];

    const isAlive = (x, y) => board[x] && board[x][y];

    const countAliveNeighbors = (x, y) => {
      return directions.reduce((acc, [dx, dy]) => acc + !!isAlive(x + dx, y + dy), 0);
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

  const saveGameState = () => {
    const gameState = { board, boardSize };
    localStorage.setItem('gameState', JSON.stringify(gameState));
  };

  const loadGameState = () => {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
      const { board, boardSize } = JSON.parse(savedState);
      setBoard(board);
      setSize(boardSize);
    }
  };

  useEffect(() => {
    initializeBoard();
  }, [boardSize]);

  return (
    <GameContext.Provider value={{ board, boardSize, setBoardSize, initializeBoard, randomizeBoard, evolveBoard, saveGameState, loadGameState }}>
      {children}
    </GameContext.Provider>
  );
};
