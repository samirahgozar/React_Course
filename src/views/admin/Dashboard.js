import React from "react";
// components
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CryptoForm from "components/Form/CryptoForm.js";

export default function Dashboard() {
  const items = [
    {
      id: '1',
      currency: 'Bitcoin',
      img: 'https://cdn.silver.com/wp-content/uploads/2021/04/1-oz-bitcoin-icon-silver-round-proof-like-gold-plated_obv.jpg',
      vol: 50,
      dayRate: 5.5,
      weekRate: 12,
      price: 28000,
    },
    {
      id: '2',
      currency: 'DogeCoin',
      img: 'https://altcoinsbox.com/wp-content/uploads/2023/01/dogecoin-logo.png',
      vol: 50000,
      dayRate: -30,
      weekRate: -22,
      price: 0.088,
    },
    {
      id: '3',
      currency: 'Shib',
      img: 'https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png',
      vol: 28000000,
      dayRate: 34,
      weekRate: 33,
      price: 0.000000088,
    },
  ];
  return (
    <>
      <div className="relative  md:pt-1 pb-32 pt-1">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
          </div>
        </div>
      </div>
      
      <div class="mb-3">

        <CryptoForm></CryptoForm>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic
            currency={items[0].currency}
            vol={items[0].vol}
            dayRate={items[0].dayRate}
            price={items[0].price}
            img={items[0].img}
            weekRate={items[0].weekRate}
          />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic
            currency={items[1].currency}
            vol={items[1].vol}
            dayRate={items[1].dayRate}
            price={items[1].price}
            img={items[1].img}
            weekRate={items[1].weekRate}
          />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic
            currency={items[2].currency}
            vol={items[2].vol}
            dayRate={items[2].dayRate}
            price={items[2].price}
            img={items[2].img}
            weekRate={items[2].weekRate}
          />
        </div>
      </div>
    </>
  );
}
