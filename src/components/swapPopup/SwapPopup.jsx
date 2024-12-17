import React, { useState } from "react";
import './SwapPopup.css'
import ring from '../../assets/ring.gif'
import Vectora from '../../assets/Vectora.webp'
import swapButton from '../../assets/swapButton.webp'
import bitcoin from '../../assets/bitcoin.jpeg'

const SwapPopup = (props) => {

    return (
        <div className={ props.status ? 'SwapPopup active' : ' SwapPopup'}>
            <div className='form-wrap-popup'>
            <span onClick={props.handleSwap} className='close-swap'>X</span>

                <div className='form-down-popup'>
                    <div className="order-id">
                        <div className="order-id-parts">
                            <div className="ring">
                                <p>Transation Process Loading</p>
                                <img src={ring} alt="" />
                            </div>
                            <div className="b-chain-flex">
                                <div className="b-chain">
                                    <img src={bitcoin} alt="" />
                                    <p>Chain</p>
                                </div>
                                <span className="swapButton"><img src={swapButton} alt="" /></span>
                                <div className="b-chain">
                                    <img src={bitcoin} alt="" />
                                    <p>Chain</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-id-parts d-fx">
                            <p className='ord-stats'>Order Status</p>
                            <p className='ord-stats-btn'>Completed</p>
                            <p className="ord-Progress">Order Progress Bar</p>
                        </div>
                        <div className="order-id-parts d-fx">
                            <div className="w-100">
                                <p className='order-id-btn'>
                                    Order Id : 11
                                </p>
                            </div>
                            <p className='Strexhash'>Strexhash : 0x12.....34</p>
                            <p className='Strexhash'>Strexhash : 0x12.....34</p>
                        </div>
                    </div>
                        <div className="Fundiing-box">
                            <img src={Vectora} alt="" />
                            <div className="Initiated">
                                <p>Initiated</p>
                            </div>
                            <div className="Initiated">
                                <p>Fundiing Detected</p>
                            </div>
                            <div className="Initiated">
                                <p>Bridging Init</p>
                            </div>
                            <div className="Initiated">
                                <p>Bridging Init</p>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default SwapPopup
