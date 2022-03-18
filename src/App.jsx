import Content from "./components/content/content";
import Params from "./components/params/params";
import "./App.css"
import { useState, useEffect } from "react";
import GetCourse from "./services/getCourse";

const App = () => {
  
  const [firstAmount, setFirstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState(1);
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('USD');
  const [rates, setRates] = useState([]);
  const getCourse = new GetCourse();

  useEffect(() => {
    getCourse.getCourse("https://www.cbr-xml-daily.ru/latest.js")
    .then(response => {
      setRates(response.rates);
    }, [])
  })

  function toThree(number) {
    return number.toFixed(3);
  }

  function handleFirstAmountChange(firstAmount) {
    setSecondAmount(toThree(firstAmount * rates[secondCurrency]/rates[firstCurrency]))
    setFirstAmount(firstAmount) 
    
  }

  function handleFirstCurrencyChange(firstCurrency) {
    setSecondAmount(toThree(firstAmount * rates[secondCurrency]/rates[firstCurrency]))
    setFirstCurrency(firstCurrency)
  }
  
  function handleSecondAmountChange(secondAmount) {
    setFirstAmount(toThree(secondAmount * rates[firstCurrency]/rates[secondCurrency]))
    setSecondAmount(secondAmount)
  }

  function handleSecondCurrencyChange(secondCurrency) {
    setFirstAmount(toThree(secondAmount * rates[firstCurrency]/rates[secondCurrency]))
    setSecondCurrency(secondCurrency)
  }

  return (
    <div>
      <h1>Exchange money</h1>
        <div className="wrapper">
          <Content onAmountChange={handleFirstAmountChange} onCurrencyChange={handleFirstCurrencyChange} currencies={Object.keys(rates)} amount={firstAmount} currency={firstCurrency}/>
          <Content onAmountChange={handleSecondAmountChange} onCurrencyChange={handleSecondCurrencyChange} currencies={Object.keys(rates)} amount={secondAmount} currency={secondCurrency}/>
        </div>
          <Params currentRate={rates[firstCurrency]}/>
    </div>
  )
};

export default App;