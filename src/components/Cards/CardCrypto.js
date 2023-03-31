import React from "react";
// components
import CardStats from "components/Cards/CardStats.js";
import CardRow from "components/Cards/CardRow.js";

export default function CardCrypto(props) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold uppercase text-base text-blueGray-700">
                Crypto
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <CardRow
            currency={props.currency}
            vol={props.vol}
            dayRate={props.dayRate}
          />
          <CardStats
            statSubtitle="price"
            statTitle={props.price}
            statArrow={props.weekRate > 0 ? "up" : "down"}
            statPercent={props.weekRate}
            statPercentColor={
              props.weekRate > 0 ? "text-emerald-500" : "text-red-500"
            }
            statDescripiron="Since last week"
            statIconName={props.img}
            statIconColor="bg-red-500"
          />
        </div>
      </div>
    </>
  );
}
