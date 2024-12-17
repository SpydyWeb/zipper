import React, { useState, useEffect } from "react";
import bgGreen from '../../../../src/assets/Group91(1).webp';
import imgcheck from '../../../../src/assets/bitcoin.jpeg';
import './SwapChain.css'

const SwapChain = (props) => {


    const [selectedOption, setSelectedOption] = useState(props.options[0].label);
    const [selectedImage, setSelectedImage] = useState(props.options[0].img);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option.label);
        setSelectedImage(option.img);
        setDropdownOpen(false);
    };

    return (
        <div className="custom-dropdown">
            <div className="selected" onClick={() => setDropdownOpen(!dropdownOpen)}>
                {selectedImage && <img width={21} height={21} src={selectedImage} alt="" />}
                {selectedOption || "Select Option"}
            </div>
            {dropdownOpen && (
                <div className="options">
                    {props.options.map((option) => (
                        <div
                            key={option.value}
                            className="option"
                            onClick={() => handleOptionSelect(option)}
                        >
                            <img width={21} height={21} src={option.img} alt="" /> {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SwapChain;
