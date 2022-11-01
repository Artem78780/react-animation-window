import React, { useState } from 'react';
import ModalWindow from './ModalWindow'
import './index.scss';

function App() {

  const [visible, setVisible] = useState(false)

  return (
    <div className="App">
      <button
        className="open-modal-btn"
        onClick={() => setVisible(true)}
      >✨
        Відкрити вікно
      </button>
      <ModalWindow  visible={visible} setVisible={setVisible}/>
    </div>
  );
}

export default App;
