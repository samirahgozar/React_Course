import React from "react";
// components
import CardCrypto from "components/Cards/CardCrypto.js";

export default function CardCryptoList(props) {
  let cryptoConent = <p>there is no any crypto</p>;
  if (props.items.length > 0) {
    cryptoConent = props.items.map((i) => (
      <CardCrypto
        key={i.id}
        currency={i.currency}
        vol={i.vol}
        dayRate={i.dayRate}
        price={i.price}
        img={i.img}
        weekRate={i.weekRate}
      />
    ));
  }
  return (
    <>
      <div className="flex flex-wrap mt-4">{cryptoConent}</div>
    </>
  );
}
