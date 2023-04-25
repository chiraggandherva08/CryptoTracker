import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img className="image-coin" src={image} alt="crypto" />
          <div className="coin-name">{name}</div>
          <div className="coin-symbol">({symbol})</div>
          <div className="coin-price">($) {price}</div>
          <div className="coin-volume">($) {volume.toLocaleString()}</div>

          {priceChange < 0 ? (
            <div className="coin-percent red-foreground">{priceChange} %</div>
          ) : (
            <div className="coin-percent green-foreground">{priceChange} %</div>
          )}

          <div className="coin-marketcap">${marketcap.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
