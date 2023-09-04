import "./styles.css";
import Block from "./Block";
import { useEffect, useState } from "react";
import rates from "./rates";
export default function App() {
  const [fromCurrency, setFromCurrency] = useState("TG");
  const [toCurrency, setToCurrency] = useState("RUB");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  function onChangeFromPrice(value) {
    const price = value / rates[fromCurrency];
    const resault = price * rates[toCurrency];
    setToPrice(resault);

    setFromPrice(value);
  }
  function onChangeToPrice(value) {
    const resault = (rates[fromCurrency] / rates[toCurrency]) * value;
    setFromPrice(resault);
    setToPrice(value);
  }
  useEffect(() => onChangeFromPrice(fromPrice), [fromCurrency, toCurrency]);

  return (
    <div className="App">
      <Block
        onChangeValue={onChangeFromPrice}
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
      />
      <Block
        value={toPrice}
        onChangeValue={onChangeToPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
      />
    </div>
  );
}
