import './SizeSlider.scss';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const SizeSlider = () => {
  const { boardSize, setBoardSize } = useContext(GameContext);

  function handleChange(e) {
    setBoardSize(parseInt(e.target.value));
  };

  return (
    <div className='board-size-range flex'>
      Board Size:
      <input type="range" min="5" max="20" value={boardSize} onChange={handleChange} />
      <span>{boardSize}</span>
    </div>
  );
};

export default SizeSlider;
