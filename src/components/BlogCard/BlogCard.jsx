import React from 'react'
import './BlogCard.css'

import Paragraph from '../Paragraph/Paragraph'

const BlogCard = ({card}) => {
  return (
      <div>
          <div className='blog-card'>
              <img src={card.image} alt={card.title} className='blog-card-image' />
        <Paragraph
          size={"16px"}
          paragraph={"15-11-2024"}
          color="#747474"
          marginTop="20px"
          marginBottom='20px'
        />
        <Paragraph
        
          paragraph={"Blog Title Will Be Placed Here"}
          size={"20px"}
          marginBottom='10px'
          
        />

        <Paragraph
          size={"12px"}
          
          paragraph={"Xythum Protocol is led by a seasoned team. Jayendra, our CEO, provides strategic vision, while Shankar as COO ensures efficient operations. Abhi's market expertise guides our Web3 strategy, and Dhruv designs intuitive interfaces. Together, they're driving blockchain innovation."}
          
        />

          </div>
    </div>
  )
}

export default BlogCard