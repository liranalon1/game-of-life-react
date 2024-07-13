import './Cell.scss';

const Cell = ({ isAlive, cellSize }) => {
  return (
    <div className={`cell ${isAlive ? 'alive' : 'dead'}`} style={{ width: cellSize, height: cellSize }} />
  );
};

export default Cell;
