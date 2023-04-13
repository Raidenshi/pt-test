import information from './assets/information.svg';
import Bonus from './components/bonus/bonus';
import { useEffect, useState } from 'react';
import './App.css';
import { getBonusData, getToken } from './utils/API';
import Loader from './components/loader/loader';

function App() {
  const [error, setError] = useState(false);
  const [bonusData, setbonusData] = useState<BonusData | null>(null);

  useEffect(() => {
    getToken()
      .then((data: AuthResult) => {
        getBonusData(data.accessToken).then((bonus: Bonus) => {
          setbonusData(bonus.data);
        });
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div className="App">
      <div className="logo">
        <p>ЛОГОТИП</p>
        <a href="#">
          <img src={information} alt="" />
        </a>
      </div>
      <Bonus data={bonusData!} error={error} />
      <div className="background" />
    </div>
  );
}

export default App;
