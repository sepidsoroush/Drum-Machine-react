import './App.css';

function App() {
  const drumInfo = {
    Q : {keypad : "Q" , displayText : "Heater 1" , audio : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"} ,
    W : {keypad : "W" , displayText : "Heater 2" , audio : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" } ,
    E : {keypad : "E" , displayText : "Heater 3" , audio : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"} ,
    A : {keypad : "A" , displayText : "Heater 4" , audio : "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"} ,
    S : {keypad : "S" , displayText : "Clap" , audio : "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"} ,
    D : {keypad : "D" , displayText : "Open-HH" , audio : "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"} ,
    Z : {keypad : "Z" , displayText : "Kick-n'-Hat" , audio : "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"} ,
    X : {keypad : "X" , displayText : "Kick" , audio : "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"} ,
    C : {keypad : "C" , displayText : "Closed-HH" , audio : "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"} ,
  } 
  function playAudio(event){
    console.log(event.target.id);
    
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display"></div>
        <div className="pad-container">
          <div className='row'>
            <div className='drum-pad' id='Q-pad' onClick={playAudio}>
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
