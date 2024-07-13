import { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const [boardSize, setBoardSize] = useState(20 || boardSize);

  const initBoard = () => {
    const newBoard = Array(boardSize)
      .fill()
      .map(() =>
        Array(boardSize).fill().map(() => Math.random() > 0.7)
      );
    setBoard(newBoard);
  };

  useEffect(() => {
    initBoard();
  }, [boardSize]);

  return (
    <GameContext.Provider value={
      { 
        board, 
        boardSize, 
        setBoard,
        setBoardSize, 
        initBoard,
      }
    }>
      {children}
    </GameContext.Provider>
  );
};
