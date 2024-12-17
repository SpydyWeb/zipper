import React, { useState } from "react";
import "./SwapSec.css";
import bitcoin from "../../assets/bitcoin.jpeg";
import swaparr from "../../assets/swap-arr-up.webp";
import baseglow from "../../assets/baseglow.webp";
import swparrow from "../../assets/swp-arrow.webp";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import SwapPopup from "../swapPopup/SwapPopup";
import SwapChain from "./SwapChain/SwapChain";
import imgcheck from "../../../src/assets/bitcoin.jpeg";
import { IoIosSettings } from "react-icons/io";

const SwapSec = () => {
  const optionsOne = [
    { value: "option1", label: "Select Bitcoin 1", img: imgcheck },
    { value: "option2", label: "Select Bitcoin 2", img: imgcheck },
    { value: "option3", label: "Select Bitcoin 3", img: imgcheck },
    { value: "option4", label: "Select Bitcoin 4", img: imgcheck },
  ];

  const optionsOneShort = [
    { value: "option1", label: "BTS 1", img: imgcheck },
    { value: "option2", label: "BTS 2", img: imgcheck },
    { value: "option3", label: "BTS 3", img: imgcheck },
    { value: "option4", label: "BTS 4", img: imgcheck },
  ];

  const optionsTwoShort = [
    { value: "option1", label: "Two 1", img: imgcheck },
    { value: "option2", label: "Two 2", img: imgcheck },
    { value: "option3", label: "Two 3", img: imgcheck },
    { value: "option4", label: "Two 4", img: imgcheck },
    { value: "option5", label: "Two 5", img: imgcheck },
    { value: "option6", label: "Two 6", img: imgcheck },
  ];

  const optionsTwo = [
    { value: "option1", label: "Select Option Two 1", img: imgcheck },
    { value: "option2", label: "Select Option Two 2", img: imgcheck },
    { value: "option3", label: "Select Option Two 3", img: imgcheck },
    { value: "option4", label: "Select Option Two 4", img: imgcheck },
    { value: "option5", label: "Select Option Two 5", img: imgcheck },
    { value: "option6", label: "Select Option Two 6", img: imgcheck },
  ];

   // The full word
   const fullWord = "ashgl70alg9lsdh97kjghl7y9nlsy87ld"; 
   const firstPart = fullWord.slice(0, 4); 
   const lastPart = fullWord.slice(-4);  
   const maskedWord = `${firstPart}....${lastPart}`;

  const [activeTab, setActiveTab] = useState("swap"); // Tracks active tab
  const [status, setStatus] = useState(false);
  const [rowRev, setRowRev] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSwapStatus = () => {
    setStatus(!status);
  };

  const handleRowRev = () => {
    setRowRev(!rowRev);
  };

  return (
    <div className="pos-rel">
      <div className="form-container">
        <Link to={"https://xythum.io/"} className="Back-Btn">
          <FaArrowLeft />
          Back
        </Link>
        {/* user id / address */}
        <span className="text-id-hidden"><IoIosSettings />{maskedWord}</span>

        <div className="form-wrap">
          <div className="form-upper">
            <ul>
              <li
                onClick={() => handleTabClick("swap")}
                className={activeTab === "swap" ? "active" : ""}
              >
                Swap
              </li>
              <li
                onClick={() => handleTabClick("history")}
                className={activeTab === "history" ? "active" : ""}
              >
                History
              </li>
              <li
                onClick={() => handleTabClick("stats")}
                className={activeTab === "stats" ? "active" : ""}
              >
                Stats
              </li>
            </ul>
            <div className="cnct-wllt">
              Connect Wallet <img src={swparrow} alt="Connect Wallet" />
            </div>
          </div>

          {/* Swap Tab */}
          {activeTab === "swap" && (
            <div className="active form-down">
              <form action="">
                <div className={rowRev ? "row-rev rev-it" : "row-rev"}>
                  <div className="w-100">
                    <div
                      className="slct-bx-out"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "1rem",
                      }}
                    >
                      <div className="slct-bx slct-bx-left">
                        <SwapChain options={optionsOneShort} />
                      </div>
                      <p className="on">
                        <span>ON</span>
                      </p>
                      <div className="slct-bx slct-bx-right">
                        <SwapChain options={optionsOne} />
                      </div>
                    </div>
                    <div className="input-tx-bx">
                      <input
                        className="input-tx"
                        type="text"
                        placeholder="Enter Your Amount"
                      />
                    </div>
                  </div>

                  <img
                    onClick={handleRowRev}
                    className="swaparr"
                    src={swaparr}
                    alt="Swap"
                    title="Reverse Swap"
                  />

                  <div className="w-100">
                    <div
                      className="slct-bx-out"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "1rem",
                      }}
                    >
                      <div className="slct-bx slct-bx-left">
                        <SwapChain options={optionsTwoShort} />
                      </div>
                      <p className="on">
                        <span>ON</span>
                      </p>
                      <div className="slct-bx slct-bx-right">
                        <SwapChain options={optionsTwo} />
                      </div>
                    </div>
                    <div className="input-tx-bx">
                      <input
                        className="input-tx"
                        type="text"
                        placeholder="You Receive"
                      />
                    </div>
                  </div>
                </div>
                <span onClick={handleSwapStatus} className="swap-btn">
                  Swap
                </span>
              </form>
            </div>
          )}

          {/* History Tab */}
          {activeTab === "history" && (
            <div className="form-down form-down2 active">
              <form action="">
                <div className="input-tx-bx2">
                  <p>ALL&nbsp;ORDERS</p>{" "}
                  <input className="input-tx" type="text" placeholder="Search" />
                </div>

                <div className="order-id-box">
                  <div className="order-id">
                    <div className="order-id-parts">
                      <p className="order-id-btn">Order Id : 11</p>
                      <div className="b-chain-flex">
                        <div className="b-chain">
                          <img src={bitcoin} alt="" />
                          <p>Chain</p>
                        </div>
                        <span>TO</span>
                        <div className="b-chain">
                          <img src={bitcoin} alt="" />
                          <p>Chain</p>
                        </div>
                      </div>
                    </div>
                    <div className="order-id-parts d-fx">
                      <p className="ord-stats">Order Status</p>
                      <p className="ord-stats-btn">Completed</p>
                    </div>
                    <div className="order-id-parts d-fx">
                      <p className="Strexhash">Strexhash : 0x12.....34</p>
                      <p className="Strexhash">Strexhash : 0x12.....34</p>
                    </div>
                  </div>
                </div>

                <div className="order-id-box">
                  <div className="order-id">
                    <div className="order-id-parts">
                      <p className="order-id-btn">Order Id : 11</p>
                      <div className="b-chain-flex">
                        <div className="b-chain">
                          <img src={bitcoin} alt="" />
                          <p>Chain</p>
                        </div>
                        <span>TO</span>
                        <div className="b-chain">
                          <img src={bitcoin} alt="" />
                          <p>Chain</p>
                        </div>
                      </div>
                    </div>
                    <div className="order-id-parts d-fx">
                      <p className="ord-stats">Order Status</p>
                      <p className="ord-stats-btn">Completed</p>
                    </div>
                    <div className="order-id-parts d-fx">
                      <p className="Strexhash">Strexhash : 0x12.....34</p>
                      <p className="Strexhash">Strexhash : 0x12.....34</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* Stats Tab */}
          {activeTab === "stats" && (
            <div className="form-down form-down2 active">
              {/* Add Stats Content */}
            </div>
          )}
        </div>
        <img className="baseglow" src={baseglow} alt="baseglow" />
      </div>
      <SwapPopup status={status} handleSwap={handleSwapStatus} />
    </div>
  );
};

export default SwapSec;
