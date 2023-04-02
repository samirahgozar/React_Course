import React, { useState } from "react";

export default function CryptoForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredVol, setEnteredVol] = useState("");
  const [enteredDailyRate, setEnteredDailyRate] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredLogo, setEnteredLogo] = useState("");
  const [enteredWeeklyRate, setEnteredWeeklyRate] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const volChangeHandler = (event) => {
    setEnteredVol(event.target.value);
  };
  const dailyRateChangeHandler = (event) => {
    setEnteredDailyRate(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const logoChangeHandler = (event) => {
    setEnteredLogo(event.target.value);
  };

  const weeklyRateChangeHandler = (event) => {
    setEnteredWeeklyRate(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const cryptoData = {
      currency: enteredName,
      vol: enteredVol,
      dayRate: enteredDailyRate,
      price: enteredPrice,
      img: enteredLogo,
      weekRate: enteredWeeklyRate,
    };
    //console.log(cryptoData);
    //pass form data to NewCrypto(chile - to - parrent)
    props.onSaveCryptoData(cryptoData);

    setEnteredName("");
    setEnteredVol("");
    setEnteredDailyRate("");
    setEnteredPrice("");
    setEnteredLogo("");
    setEnteredWeeklyRate("");
  };

  return (
    <>
      <form
        className="pt-6 w-full max-w-lg"
        id="fff"
        onSubmit={submitFormHandler}
      >
        <div className="mx-4 flex flex-wrap">
          <div className="xl:w-2/12 pr-4 mt-2">
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
              placeholder="Name"
              className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div className="xl:w-2/12 pr-4 mt-2">
            <input
              type="text"
              value={enteredVol}
              onChange={volChangeHandler}
              placeholder="Volume"
              className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div className="xl:w-2/12 pr-4 mt-2">
            <input
              type="text"
              value={enteredDailyRate}
              onChange={dailyRateChangeHandler}
              placeholder="Daily Rate"
              className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div className="xl:w-2/12 pr-4 mt-2">
            <input
              type="text"
              value={enteredPrice}
              onChange={priceChangeHandler}
              placeholder="Price"
              className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div className="xl:w-2/12 pr-4 mt-2">
            <input
              type="text"
              value={enteredWeeklyRate}
              onChange={weeklyRateChangeHandler}
              placeholder="week Rate"
              className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
        </div>
        <div className="flex-wrap mx-4 mt-2">
          <input
            type="text"
            value={enteredLogo}
            onChange={logoChangeHandler}
            placeholder="Logo Address"
            className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
          />
        </div>

        <div className="flex-wrap -mx-4 mb-1 mt-2">
          <div className="xl:w-4/12 px-4 mb-2 md:mb-0">
            <button
              className="text-lightBlue-500 bg-transparent border border-solid border-lightBlue-500 hover:bg-lightBlue-500 hover:text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Add Crypro
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
