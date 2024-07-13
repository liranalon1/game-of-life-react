import './styles/App.scss';
import { GameProvider } from './context/GameContext';
import Board from './components/Board/Board';
import Controls from './components/Controls/Controls';
import SizeSlider from './components/SizeSlider/SizeSlider';

const App = () => {
  return (
    <GameProvider>
      <div className='App'>
        <h1>Conway's Game of Life</h1>
        <div className="controls-container flex">
          <Controls />
          <SizeSlider />
        </div>
        <Board />
      </div>
    </GameProvider>
  );
};

export default App;
