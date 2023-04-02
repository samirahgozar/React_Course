import React, { useState } from "react";
// components
import CardCryptoList from "components/Cards/CardCryptoList.js";
import NewCrypto from "components/Form/NewCrypto.js";
const cryptoData = [
  {
    id: "1",
    currency: "Bitcoin",
    img: "https://cdn.silver.com/wp-content/uploads/2021/04/1-oz-bitcoin-icon-silver-round-proof-like-gold-plated_obv.jpg",
    vol: 50,
    dayRate: 5.5,
    weekRate: 12,
    price: 28000,
  },
  {
    id: "2",
    currency: "DogeCoin",
    img: "https://altcoinsbox.com/wp-content/uploads/2023/01/dogecoin-logo.png",
    vol: 50000,
    dayRate: -30,
    weekRate: -22,
    price: 0.088,
  },
  {
    id: "3",
    currency: "Shib",
    img: "https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png",
    vol: 28000000,
    dayRate: 34,
    weekRate: 33,
    price: 0.000000088,
  },
];
export default function Dashboard() {
  const [items, setItems] = useState(cryptoData);
  const addCryptoHandler = (newCrypto) => {
    console.log("here is Dashboard.js");
    console.log(newCrypto);
    setItems((prevItems) => {
      return [newCrypto, ...prevItems];
    });
  };
  return (
    <>
      <div className="relative  md:pt-1 pb-32 pt-1">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>{/* Card stats */}</div>
        </div>
      </div>
      <NewCrypto onAddCrypto={addCryptoHandler}></NewCrypto>
      <CardCryptoList items={items}></CardCryptoList>
    </>
  );
}
