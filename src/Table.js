function Table(props){
    let coins = props.coins;
    return (
        <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Buy Price</th>
            <th>Amount</th>
            <th>Total Investment</th>
            <th>Current Price</th>
            <th>Current Value</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            return (
              <tr key={coin.name}>
                <td>{coin.name}</td>
                <td>₹{coin.buyPrice}</td>
                <td>{coin.amount}</td>
                <td>₹{Math.round(coin.buyPrice * coin.amount)}</td>
                <td>₹{coin.currentPrice}</td>
                <td>₹{coin.currentPrice * coin.amount}</td>
                <td>
                  ₹
                  {Math.round(
                    coin.currentPrice * coin.amount -
                      coin.buyPrice * coin.amount
                  )}
                  <small>
                    {" "}
                    (
                    {Math.round(
                      ((coin.currentPrice * coin.amount -
                        coin.buyPrice * coin.amount) /
                        (coin.buyPrice * coin.amount)) *
                        100
                    )}
                    %){" "}
                  </small>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
}

export default Table;
