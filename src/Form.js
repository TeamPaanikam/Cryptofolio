import { useState } from "react";

export default function Form(props){
    let [coins, changeCoins] = [props.coins, props.changeCoins];
    
    let [allCoins, setAllCoins] = [props.allCoins, props.setAllCoins];
    console.log(allCoins)
    let [tokenName, ct] = useState("");
    let [lastResult, changeLastResult] = [props.lastResult, props.changeLastResult];
    let [buyPrice, changeBuyPrice] = useState();
    let [amount, changeAmount] = useState();
    return (
        <form>
        <div>
          <label for="token">Token Name</label>
          <input
            type="text"
            name="token"
            value={tokenName}
            onChange={(e) => ct(e.target.value)}
          ></input>
          <ul
            style={{
              backgroundColor: "#1aa34a",
              borderRadius: "0 0 5px 5px",
              // padding: "0.5em",
              marginTop: 0,
            }}
          >
            {tokenName
              ? allCoins
                  .filter((coin) => coin.includes(tokenName))
                  .map((li) => (
                    <div
                      key={li}
                      onClick={(e) => {
                        console.log(e.target.innerHTML);
                        ct(e.target.innerHTML);
                      }}
                    >
                      {li}
                    </div>
                  ))
              : ""}
          </ul>
        </div>

        <div>
          <label for="buyprice">Buy Price</label>
          <input
            type="text"
            name="buyPrice"
            onChange={(e) => changeBuyPrice(e.target.value)}
          ></input>
        </div>

        <div>
          <label for="buyprice">Amount</label>
          <input
            type="text"
            name="amount"
            onChange={(e) => changeAmount(e.target.value)}
          ></input>
        </div>
        <button
          type="button"
          onClick={() => {
            console.log(allCoins);
            if (allCoins.findIndex((c) => c === tokenName) !== -1)
              changeCoins([
                ...coins,
                { name: tokenName, amount: amount, buyPrice: buyPrice, currentPrice: lastResult[tokenName].last },
              ]);
            else console.error("No such token");
          }}
        >
          Add
        </button>
      </form>
    )
}