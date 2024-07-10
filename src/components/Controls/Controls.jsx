import './Controls.scss';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const Controls = () => {
  const { initializeBoard, randomizeBoard, evolveBoard, saveGameState, loadGameState } = useContext(GameContext);

  return (
    <div className='controls flex'>
      <button className='btn' onClick={initializeBoard}>Init</button>
      <button className='btn' onClick={randomizeBoard}>Randomize</button>
      <button className='btn' onClick={evolveBoard}>Next Gen</button>
      <button className='btn' onClick={saveGameState}>Save</button>
      <button className='btn' onClick={loadGameState}>Load</button>
    </div>
  );
};

export default Controls;
