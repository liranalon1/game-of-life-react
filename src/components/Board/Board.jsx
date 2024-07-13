import './Board.scss';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Cell from '../Cell/Cell';

const Board = () => {
  const cellSize = '30px';
  const { board } = useContext(GameContext);

  return (
    <div className='board grid' style={{ gridTemplateColumns: `repeat(${board.length}, ${cellSize})` }}>
      {board.map((row, rowIndex) => 
        row.map((isAlive, cellIndex) => 
          <Cell key={`${rowIndex}-${cellIndex}`} isAlive={isAlive} cellSize={cellSize} />
        )
      )}
    </div>
  );
};

export default Board;
