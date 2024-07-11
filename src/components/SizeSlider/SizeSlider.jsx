import './SizeSlider.scss';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const SizeSlider = () => {
  const { size, setSize } = useContext(GameContext);

  const handleChange = (e) => {
    setSize(parseInt(e.target.value));
  };

  return (
    <div className='board-size-range flex'>
      Board Size:
      <input type="range" min="5" max="20" value={size} onChange={handleChange} />
      <span>{size}</span>
    </div>
  );
};

export default SizeSlider;
