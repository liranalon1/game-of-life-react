import './Cell.scss';

const Cell = ({ isAlive, toggleCell }) => {
  return (
    <div className={`cell ${isAlive ? 'black' : 'white'}`} onClick={toggleCell} />
  );
};

export default Cell;
