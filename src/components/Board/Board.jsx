import './Board.scss';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Cell from '../Cell/Cell';

const Board = () => {
  const { board, setBoard } = useContext(GameContext);

  const toggleCell = (x, y) => {
    const newBoard = board.map(arr => [...arr]);
    newBoard[x][y] = !newBoard[x][y];
    setBoard(newBoard);
  };

  return (
    <div className={'board grid'} style={{ gridTemplateColumns: `repeat(${board.length}, 30px)` }}>
      {board.map((row, x) => 
        row.map((isAlive, y) => 
          <Cell key={`${x}-${y}`} isAlive={isAlive} toggleCell={() => toggleCell(x, y)} />
        )
      )}
    </div>
  );
};

export default Board;
