import React, { useEffect, useState } from 'react';
import { getCurrentRate } from './api/api';
import './App.css';
import { Calculator } from './components/Calculator/Calculator';
import { Header } from './components/Header/Header';
import { IRate } from './interfaces/rate';

const defaultRate = [{
  ccy: '',
  base_ccy: '',
  buy: '',
  sale: '',
}]

const App: React.FC = () => {
  const [rate, setRate] = useState<IRate[]>(defaultRate);
  const [isRate, setIsRate] = useState(false);

  useEffect(() => {
    getCurrentRate()
    .then(rate => setRate(rate))
    }, [isRate]);

  return (
    <div className="App">
      <Header allRate={rate}/>
      <Calculator allRate={rate}/>
    </div>
  );
}

export default App;
