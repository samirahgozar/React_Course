import React, { useState } from "react";
import CryptoForm from "components/Form/CryptoForm.js";

export default function NewCrypto(props) {
  const saveCryptoDataHandler = (enteredCryptoData) => {
    const cryptoData = {
      id: Math.random(),
      ...enteredCryptoData,
    };
    //console.log(cryptoData);
    //pass data from newCrypto - to - Dashboard (child-to-parrent)
    props.onAddCrypto(cryptoData);
  };

  return (
    <>
      <div className="mb-3">
        <CryptoForm onSaveCryptoData={saveCryptoDataHandler}></CryptoForm>
      </div>
    </>
  );
}
