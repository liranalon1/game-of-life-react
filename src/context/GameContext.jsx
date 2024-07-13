import { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const [boardSize, setBoardSize] = useState(20 || boardSize);

  return (
    <GameContext.Provider value={
      { 
        board, 
        boardSize, 
        setBoard,
        setBoardSize,
      }
    }>
      {children}
    </GameContext.Provider>
  );
};
