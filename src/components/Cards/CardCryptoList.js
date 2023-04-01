import React from "react";
// components
import CardCrypto from "components/Cards/CardCrypto.js";

export default function CardCryptoList(props) {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {props.items.map((i) => (
          <CardCrypto
            currency={i.currency}
            vol={i.vol}
            dayRate={i.dayRate}
            price={i.price}
            img={i.img}
            weekRate={i.weekRate}
          />
        ))}
      </div>
    </>
  );
}
