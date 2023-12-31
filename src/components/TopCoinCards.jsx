import React from 'react';
import CoinCard from './CoinCard';

const TopCoinCards = ({data}) => {
  return (
    <div className="coins__card__container">
      {data?.map((coin,ind) => {
        if(ind < 4)
        return <CoinCard coin={coin} key={coin?.id} />;
      })}
    </div>
  );
}

export default TopCoinCards;