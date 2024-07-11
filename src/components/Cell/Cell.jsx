import './Cell.scss';

const Cell = ({ isAlive, cellSize }) => {
  return (
    <div className={`cell ${isAlive ? 'black' : 'white'}`} style={{ width: cellSize, height: cellSize }} />
  );
};

export default Cell;
