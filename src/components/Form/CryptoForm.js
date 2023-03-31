import React, { useState } from "react";

export default function CryptoForm() {
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredVol, setEnteredVol] = useState("");
  // const [enteredDailyRate, setEnteredDailyRate] = useState("");
  // const [enteredPrice, setEnteredPrice] = useState("");
  // const [enteredLogo, setEnteredLogo] = useState("");
  // const [enteredWeeklyRate, setEnteredWeeklyRate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredVol: "",
    enteredDailyRate: "",
    enteredPrice: "",
    enteredLogo: "",
    enteredWeeklyRate: "",
  });

  const nameChangeHandler = (event) => {
    // setEnteredName(event.target.value);
    setUserInput({
      ...userInput,
      enteredName: event.target.value,
    });
  };
  const volChangeHandler = (event) => {
    //setEnteredVol(event.target.value);
    setUserInput({
      ...userInput,
      enteredVol: event.target.value,
    });
  };
  const dailyRateChangeHandler = (event) => {
    // setEnteredDailyRate(event.target.value);
    setUserInput({
      ...userInput,
      enteredVol: event.target.value,
    });
  };
  const priceChangeHandler = (event) => {
    // setEnteredPrice(event.target.value);
    setUserInput({
      ...userInput,
      enteredPrice: event.target.value,
    });
  };
  const logoChangeHandler = (event) => {
    // setEnteredLogo(event.target.value);
    setUserInput({
      ...userInput,
      enteredLogo: event.target.value,
    });
  };

  const weeklyRateChangeHandler = (event) => {
    // setEnteredWeeklyRate(event.target.value);
    setUserInput({
      ...userInput,
      enteredWeeklyRate: event.target.value,
    });
  };

  return (
    <>
      <form class="pt-6 w-full max-w-lg" id="fff">
        <div class="mx-4 flex flex-wrap">
          <div class="xl:w-2/12 pr-4 mt-2">
            <input
              type="text"
              onChange={nameChangeHandler}
              placeholder="Name"
              class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div class="xl:w-2/12 pr-4 mt-2">
            <input
              type="text"
              onChange={volChangeHandler}
              placeholder="Volume"
              class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div class="xl:w-2/12 pr-4 mt-2">
            <input
              type="text"
              onChange={dailyRateChangeHandler}
              placeholder="Daily Rate"
              class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div class="xl:w-2/12 pr-4 mt-2">
            <input
              type="text"
              onChange={priceChangeHandler}
              placeholder="Price"
              class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div class="xl:w-2/12 pr-4 mt-2">
            <input
              type="text"
              onChange={weeklyRateChangeHandler}
              placeholder="week Rate"
              class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
        </div>
        <div class="flex-wrap mx-4 mt-2">
          <input
            type="text"
            onChange={logoChangeHandler}
            placeholder="Logo Address"
            class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
          />
        </div>

        <div class="flex-wrap -mx-4 mb-1 mt-2">
          <div class="xl:w-4/12 px-4 mb-2 md:mb-0">
            <button
              className="text-lightBlue-500 bg-transparent border border-solid border-lightBlue-500 hover:bg-lightBlue-500 hover:text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Add Crypro
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
