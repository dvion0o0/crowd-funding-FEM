import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import About from "./components/About";
import Modal from "./components/Modal";
import ModalData from "./components/ModalData";
import Data from "./components/Data";
import PledgeModal from "./components/pledgeModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [backers, setBackers] = useState(5007);
  const [bamboo, SetBamboo] = useState(25);
  const [black, setBlack] = useState(75);
  const [backed, setBacked] = useState(89914);
  const [data, setData] = useState(ModalData);
  const [statData, setStatData] = useState(Data);
  const [checked, setChecked] = useState(null);
  const [pledgeModal, setPledgeModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const submitPledge = () => {
    setBackers(backers + 1);
    setPledgeModal(true);
    setShowModal(false);
    if (checked === 1) {
      setBacked(backed + bamboo);
      statData[checked - 1].left = data[checked].left - 1;
      data[checked].left = data[checked].left - 1;
      console.log(data);
    } else if (checked === 2) {
      setBacked(backed + black);
      statData[checked - 1].left = data[checked].left - 1;
      data[checked].left = data[checked].left - 1;
    }
  };

  const handleValue = (e) => {
    if (e.target.name === "Bamboo Stand") {
      SetBamboo(parseInt(e.target.value));
    } else {
      setBlack(parseInt(e.target.value));
    }
  };

  return (
    <>
      <Modal
        closeModal={closeModal}
        showModal={showModal}
        submitPledge={submitPledge}
        handleValue={handleValue}
        black={black}
        bamboo={bamboo}
        data={data}
        checked={checked}
        setChecked={setChecked}
      />
      <PledgeModal pledgeModal={pledgeModal} setPledgeModal={setPledgeModal} />
      <div className={`${pledgeModal || showModal ? "modal-active" : null}`}>
        <Header
          openModal={openModal}
          showModal={showModal}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <Stats showModal={showModal} backers={backers} backed={backed} />
        <About
          openModal={openModal}
          showModal={setShowModal}
          statData={statData}
        />
      </div>
    </>
  );
}

export default App;
