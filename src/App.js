import './App.css';

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div className="pad-container">
          <div id="display"></div>
          <div className='drum-pad' id='Q-pad'>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className='clip' id='Q'></audio>
            <span>Q</span>
          </div>
          <div className='drum-pad' id='W-pad'>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className='clip' id='W'></audio>
            <span>W</span>
          </div>
          <div className='drum-pad' id='E-pad'>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className='clip' id='E'></audio>
            <span>E</span>
          </div>
          <div className='drum-pad' id='A-pad'>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className='clip' id='A'></audio>
            <span>A</span>
          </div>
          <div className='drum-pad' id='S-pad'>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className='clip' id='S'></audio>
            <span>S</span>
          </div>
          <div className='drum-pad' id='D-pad'>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className='clip' id='D'></audio>
            <span>D</span>
          </div>
          <div className='drum-pad' id='Z-pad'>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className='clip' id='Z'></audio>
            <span>Z</span>
          </div>
          <div className='drum-pad' id='X-pad'>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className='clip' id='X'></audio>
            <span>X</span>
          </div>
          <div className='drum-pad' id='C-pad'>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className='clip' id='C'></audio>
            <span>C</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
