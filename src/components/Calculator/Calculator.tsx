import { useEffect, useState } from 'react';
import { AllCurrency, IRate } from '../../interfaces/rate';
import './calculator.css';

type Currency = number;

type Props = {
  allRate: IRate[];
}

export const Calculator: React.FC<Props> = ({ allRate }) => {

  const [national, setNational] = useState<Currency>();
  const [currency, setCurrency] = useState<Currency>();
  const [selectedCurrency, setselectedCurrency] = useState<string>('usd');
  const [selectedRate, setselectedRate] = useState<Currency>(8);
  const [usedInput, setUsedInput] = useState<String>('');

  useEffect(() => {
    const rate = allRate.filter(rate =>
      (rate.ccy.toLocaleLowerCase() === selectedCurrency.toLocaleLowerCase())
     ).map(currency => Number(currency.sale).toFixed(2));
     if (rate) {
       setselectedRate(+rate);
     }
     console.log('Курс зі стейт' + selectedRate, 'Курс з апі:' + rate, 'Valuta:' + selectedCurrency);

     switch (usedInput) {
      case 'national':
        if (national) {
          console.log("інпут грн");
          
          console.log('---сума грн:' + national, "вибраний курс:" + selectedRate);
          
          const divide = national / selectedRate;
          setCurrency(+divide.toFixed(2));
        }
        break;

        case 'currency':
          
          if (currency) {
            console.log('інпут валюта');
            const multiply = currency * selectedRate;
            setNational(+multiply.toFixed(2));
          }
        break;
    }
     
  }, [selectedCurrency, selectedRate, usedInput]);


  const handleChangeCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedCurrency(event.target.value.toLocaleLowerCase());
    console.log(event.target.value.toLocaleLowerCase());
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isFinite(+event.target.value)) {
      setUsedInput(event.target.name);

      switch (event.target.name) {
        case 'national':
          setNational(+event.target.value);
          const divide = +event.target.value / selectedRate;
          setCurrency(+divide.toFixed(2));
          console.log('amount:' + divide, 'rate:' + selectedRate, 'event:' + event.target.value);
          break;

        case 'currency':
            setCurrency(+event.target.value);
            const multiply = +event.target.value * selectedRate;
            setNational(+multiply.toFixed(2));
          break;
      }
    }
  }

  return (
    <div className="calculator">
      <div className='calculator-result'>Ваша сумма:</div>

      <form className='calculator-form'>
        <input
          placeholder='Грн'
          type="tel"
          name='national'
          value={national ?? ''}
          onChange={handleChange}
        />
        <span>=</span>
        <input
          placeholder='Валюта'
          type="tel"
          name='currency'
          value={currency ?? ''}
          onChange={handleChange}
        />
        <select
          name="Choose currency"
          onChange={handleChangeCurrency}
        >
          {allRate.map(el => (
            <option value={el.ccy} key={el.ccy}>{el.ccy}</option>
          ))}
        </select>
      </form>
    </div>
  )
}