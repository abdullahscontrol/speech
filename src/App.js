import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './App.css'
const App = () => {
  const commands = [
    {
      command: 'reset',
      callback: ({ resetTranscript }) => {
        resetTranscript();
      }
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) => resetTranscript()
    },
    {
      command: 'open *',
      callback: (site) => { window.open('http://' + site) }
    },
    {
      command: 'increase text size',
      callback: () => { document.getElementById('content').style.fontSize = '22px' }
    },
    {
      command: 'decrease text size',
      callback: () => { document.getElementById('content').style.fontSize = '16px' }
    },
    {
      command: 'change text colour to *',
      callback: (color) => { document.getElementById('content').style.color = color }
    }
  ]
  SpeechRecognition.startListening({ continuous: true, language: 'en-ng' })
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })


  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div className='container'>
      <div className='container-child child1'>
        <div className='nav'>
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* <br /> */}
          <br />
          <h2 className='welcome'>Welcome!</h2>
          <h2>Please Speak Something to write or command Something  to do </h2>
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <br />

          <marquee behavior="" direction=""><span id="note">Note:-</span> you most have connection</marquee>
        </div>
        {/* < Developed /> */}
      </div>
      <div className='container-child child2'>
        <div id='content'><br />{transcript}</div>
      </div>

    </div>
  )
}
// function Developed() {
//   return (
//     <div className="foot">
//       <h1>Design & Developed by:</h1>
//       <p>Abdullah Muhd</p>
//     </div>
//   )
// }
export default App;