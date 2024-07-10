import './Cell.scss';

const Cell = ({ isAlive, toggleCell }) => {
  return (
    <div
      onClick={toggleCell}
      style={{
        width: 30,
        height: 30,
        backgroundColor: isAlive ? 'black' : 'white',
        border: '1px solid gray'
      }}
    />
  );
};

export default Cell;
