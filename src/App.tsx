import information from './assets/information.svg';
import Bonus from './components/bonus/bonus';
import { useEffect, useState } from 'react';
import './App.css';
import { getBonusData, getToken } from './utils/API';
import Loader from './components/loader/loader';

function App() {
  const [auth, setAuth] = useState<AuthResult | null>(null);
  const [bonusData, setbonusData] = useState<BonusData | null>(null);

  useEffect(() => {
    getToken().then((data: AuthResult) => {
      setAuth(data);
      getBonusData(data.accessToken).then((bonus: Bonus) => {
        setbonusData(bonus.data);
      });
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
      <Bonus data={bonusData!} />
      <div className="background" />
    </div>
  );
}

export default App;
