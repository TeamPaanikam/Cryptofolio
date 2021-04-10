import "./App.css";
import { useEffect, useState } from "react";
import Table from "./Table";
import Form from "./Form";

function App() {
  let [coins, changeCoins] = useState(JSON.parse(localStorage.getItem("coins")) || []);
  let [allCoins, setAllCoins] = useState([]);
  let [lastResult, changeLastResult] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://cors-proxy-cryptofolio.herokuapp.com/fetch/https://api.wazirx.com/api/v2/tickers",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        changeLastResult(result)
        setAllCoins(Object.keys(result));
        coins.forEach((coin) => {
          coin.currentPrice = result[coin.name].last;
        });
      })
      .catch((error) => console.log("error", error));
      localStorage.setItem("coins", JSON.stringify(coins));
  }, [coins]);
  return (
    <div className="App App-header">
      <h1>Cryptofolio</h1>
      <Table coins = {coins}/>
      <Form allCoins={allCoins} lastResult={lastResult} changeLastResult={changeLastResult} coins={coins} changeCoins ={changeCoins}/>
    </div>
  );
}

export default App;
