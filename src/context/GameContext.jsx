import { createContext, useState, useMemo } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const [boardSize, setBoardSize] = useState(20);

  const value = useMemo(() => ({
    board,
    boardSize,
    setBoard,
    setBoardSize,
  }), [board, boardSize]);

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};
