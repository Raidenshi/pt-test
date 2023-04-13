import { useState } from 'react';
import information from './assets/information.svg';
import './App.css';
import Bonus from './components/bonus/bonus';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="logo">
        <p>ЛОГОТИП</p>
        <a href="#">
          <img src={information} alt="" />
        </a>
      </div>
      <Bonus />
      <div className="background" />
    </div>
  );
}

export default App;
