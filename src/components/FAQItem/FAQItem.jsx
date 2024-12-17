import { useState } from "react";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import "./faqItem.css"

const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState('faq0');

    const toggleFAQ = (faqNum) => setIsOpen(faqNum);

    return (
        <div className="FAQ" >
            <div
                style={isOpen === 'faq'+index ? {
                    borderWidth: '1px 0px',
                    borderStyle: 'solid',
                    borderColor: '#EBEBEB',
                    background: 'linear-gradient(149.03deg, rgba(0, 0, 0, 0.46) 48.13%, rgba(138, 138, 138, 0.46) 95.31%)'
                } : {}}
                className="answerFAQ"
            >
                <div className="questionFAQ"
                //  onClick={toggleFAQ}
                onClick={() => toggleFAQ(isOpen === "faq"+index ? " " : "faq"+index)}
                 >
                    <Heading
                        size="25px"
                        heading={question} />
                    <span>{isOpen === 'faq'+index ? '-' : '+'}</span>
                    
                </div>
                {isOpen === 'faq'+index && (
                    <Paragraph
                        size="20px"
                        paragraph={answer} />
                )}
               
            </div>
        </div>
    );
};

export default FAQItem;
