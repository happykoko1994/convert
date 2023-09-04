import "./Block.css";

const defaulCurrencies = ["RUB", "TG", "DOLL"];

function Block({ value, onChangeValue, onChangeCurrency, currency }) {
  return (
    <div className="block-wrapper">
      <div className="curses">
        {defaulCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? "active" : ""}
            key={cur}
          >
            {cur}
          </li>
        ))}
      </div>
      <input
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        type="number"
        className="number"
      ></input>
    </div>
  );
}
export default Block;
