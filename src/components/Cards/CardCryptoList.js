import React from "react";
// components
import CardCrypto from "components/Cards/CardCrypto.js";

export default function CardCryptoList(props) {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-4/12 px-4">
          <CardCrypto
            currency={props.items[0].currency}
            vol={props.items[0].vol}
            dayRate={props.items[0].dayRate}
            price={props.items[0].price}
            img={props.items[0].img}
            weekRate={props.items[0].weekRate}
          />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardCrypto
            currency={props.items[1].currency}
            vol={props.items[1].vol}
            dayRate={props.items[1].dayRate}
            price={props.items[1].price}
            img={props.items[1].img}
            weekRate={props.items[1].weekRate}
          />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardCrypto
            currency={props.items[2].currency}
            vol={props.items[2].vol}
            dayRate={props.items[2].dayRate}
            price={props.items[2].price}
            img={props.items[2].img}
            weekRate={props.items[2].weekRate}
          />
        </div>
      </div>
    </>
  );
}
