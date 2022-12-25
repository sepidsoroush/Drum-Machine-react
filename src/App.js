import './App.css';

function App() {
  const displayLabel = {
    "Q" : "Heater 1" ,
    "W" : "Heater 2" ,
    "E" : "Heater 3" ,
    "A" : "Heater 4" ,
    "S" : "Clap" ,
    "D" : "Open-HH" ,
    "Z" : "Kick-n'-Hat" ,
    "X" : "Kick" ,
    "C" : "Closed-HH" ,
  } 
  // function playAudio(event){
  //   let x = event.target.id;
  //   x.play();
    
  // }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display"></div>
        <div className="pad-container">
          <div className='row'>
            <div className='drum-pad' id='Q-pad'>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className='clip' id='Q'></audio>
              <p>Q</p>
            </div>
            <div className='drum-pad' id='W-pad'>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className='clip' id='W'></audio>
              <p>W</p>
            </div>
            <div className='drum-pad' id='E-pad'>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className='clip' id='E'></audio>
              <p>E</p>
            </div>
          </div>
          <div className='row'>
            <div className='drum-pad' id='A-pad'>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className='clip' id='A'></audio>
              <p>A</p>
            </div>
            <div className='drum-pad' id='S-pad'>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className='clip' id='S'></audio>
              <p>S</p>
            </div>
            <div className='drum-pad' id='D-pad'>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className='clip' id='D'></audio>
              <p>D</p>
            </div>
          </div>
          <div className='row'>
            <div className='drum-pad' id='Z-pad'>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className='clip' id='Z'></audio>
              <p>Z</p>
            </div>
            <div className='drum-pad' id='X-pad'>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className='clip' id='X'></audio>
              <p>X</p>
            </div>
            <div className='drum-pad' id='C-pad'>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className='clip' id='C'></audio>
              <p>C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
