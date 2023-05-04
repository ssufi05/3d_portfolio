import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";

const EducationCard = ({ index, school, degree, location, image, date, points }) => (
  <motion.div
  variants={fadeIn("", "spring", index * 0.5, 0.75)} 
  className="bg-black-200 p-5 rounded-3xl xs:w-[320px] 
  w-full"
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{school}</h3>
      <p className='text-secondary text-[16px] font-semibold' 
        style={{ margin: 0 }}>
        {location} &nbsp;
        {degree}
      </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {points.map((point, index) => (
        <li
        key={`education-point-${index}`} 
        className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>

    <div>
      <p className='text-secondary text-[13px] pt-5 font-semibold' 
        style={{ margin: 0 }}>
        {date}
      </p>
    </div>

  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Awards</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} flex justify-center items-center w-full h-full   -mt-20 pb-14 flex flex-wrap gap-7`}>
        {education.map((school, index) => (
        <EducationCard 
        key={school.location}
        index={index}
        {...school}
        
        />
        
        ))}
      </div>
    </div>
  )
}



export default Feedbacks