import React from 'react'
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import spring from "../../public/spring.png";
import oracle from "../../public/oracle.png";
import springBoot from "../../public/springBoot.jpg";
import '../../src/App.css'
const Experiance = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html",
    },
    {
      id: 2,
      logo: css,
      name: "Css",
    },
    {
      id: 3,
      logo: spring,
      name: "Spring",
    },
    {
      id: 4,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 5,
      logo: springBoot,
      name: "SpringBoot",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];
  return (
    <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 my-16'>
     <div>
     <h1  className='text-3xl font-bold mb-5'>Experiance</h1>
     <p className=''>I've more than 2 years of experiance in below technologies.</p>
     <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3  ">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="  shadow-lg shadow-cyan-500/50 ...  bg-teal-700 md:w-[200px]md:h-[200px] flex flex-col items-center justify-center border-[2px] rounded-full  p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px]   rounded-full "
                alt=""
              />
              <div>
                <div className="">{name}</div> 
              </div>
            </div>
          ))}
        </div>
     </div>
    </div>
  )
}

export default Experiance
