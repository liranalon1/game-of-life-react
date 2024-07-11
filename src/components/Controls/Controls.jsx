import './Controls.scss';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const Controls = () => {
  const { initBoard, nextGen, saveGen, loadGen } = useContext(GameContext);

  return (
    <div className='controls flex'>
      <button className='btn' onClick={initBoard}>Initialize</button>
      <button className='btn' onClick={nextGen}>Next Gen</button>
      <button className='btn' onClick={saveGen}>Save Gen</button>
      <button className='btn' onClick={loadGen}>Load Last Gen</button>
    </div>
  );
};

export default Controls;
