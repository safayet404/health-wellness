import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import v from '../assets/v4.png'
import b from '../assets/b4.png'

const Provide = () => {
    return (
        <div className="bg-white overflow-hidden">
            <div className="container px-5 mx-auto py-8 flex flex-wrap justify-center">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 md:w-full text-center flex justify-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[25px] lg:text-[45px] md:text-[40px] font-semibold mb-4 text-center lg:text-left md:text-left">We provide ...</h1>

                        <div className="flex items-center text-center gap-[10px] md:gap-[60px] lg:gap-[60px] ">
                            <FaCheckCircle className="text-gray-500 text-lg md:text-lg lg:text-2xl ml-[70px] lg:ml-0 md:ml-0" />
                            <span className='text-sm md:text-base lg:text-lg text-gray-500'>Personalized routine</span>
                        </div>
                        <div className="flex items-center gap-[10px] md:gap-[60px] lg:gap-[60px] mt-2">
                            <FaCheckCircle className="text-gray-500 text-lg md:text-lg lg:text-2xl ml-[70px] lg:ml-0 md:ml-0" />
                            <span className='text-sm md:text-base lg:text-lg text-gray-500'>Follow-up after completing courses</span>
                        </div>

                        <hr className='text-gray-500 w-[400px] mt-2' />

                        <div className="flex items-start gap-[10px] md:gap-[60px] lg:gap-[60px] mt-2">
                            <FaCheckCircle className="text-[#9998E1] text-lg md:text-lg lg:text-2xl ml-[70px] lg:ml-0 md:ml-0" />
                            <div className='flex flex-col '>
                                <span className='text-sm md:text-base lg:text-lg text-left'>Access to additional resources</span>
                                <span className='text-gray-500 text-sm lg:text-base md:text-base w-[80%] mt-2 text-left'>
                                    We offer access to a variety of additional resources to <br /> enhance your experience, including exclusive tools, <br /> guides, and support materials designed to help you <br /> achieve your goals more effectively.
                                </span>
                            </div>
                        </div>

                        <hr className='text-gray-500 w-[400px] mt-2' />
                        
                        <div className="flex items-center gap-[10px] md:gap-[60px] lg:gap-[60px] mt-5">
                            <FaCheckCircle className="text-gray-500 text-lg ml-[70px] lg:ml-0 md:ml-0 md:text-lg lg:text-2xl" />
                            <span className='text-sm md:text-xl lgt:ext-2xl text-gray-500'>Free community support</span>
                        </div>

                        <button className='border border-[#287279] text-[#287279] text-xs lg:text-base md:text-base rounded-full p-1 lg:p-3 md:p-3 font-semibold mt-3'>
                            Learn More About Our Services
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2 md:w-full flex justify-center items-center">
                    <div className="relative">
                        <img className="mt-5 rounded-md" src={b} />
                        <img
                            src={v}
                            className="absolute top-[20%] lg:top-[15%] md:top-[10%] left-[-7%] md:left-[-5%] lg:left-[-6%] w-[45px] h-[45px] lg:w-[74px] md:w-[74] lg:h-[74px] md:h-[74px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Provide;
