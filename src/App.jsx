import Content from "./components/content/content";
import Params from "./components/params/params";
import "./App.css"
import { useState, useEffect } from "react";
import GetCourse from "./services/getCourse";

const App = () => {
  
  const [firstAmount, setFitstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState(1);
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('USD');
  const [rates, setRates] = useState([]);
  const getCourse = new GetCourse();

  useEffect(() => {
    getCourse.getCourse("http://data.fixer.io/api/latest?access_key=6508de3601ebdb16a4ff2b3dc622c5ab")
    .then(response => {
      setRates(response.rates);
    }, [])
  })

  return (
    <div>
      <h1>Exchange money</h1>
        <div className="wrapper">
          <Content currencies={Object.keys(rates)} amount={firstAmount} currency={firstCurrency}/>
          <Content currencies={Object.keys(rates)} amount={secondAmount} currency={secondCurrency}/>
        </div>
          <Params/>
    </div>
  )
};

export default App;