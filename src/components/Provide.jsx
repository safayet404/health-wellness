import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import v from '../assets/v4.png'
import b from '../assets/b4.png'
const Provide = () => {
    return (
        <div className="bg-white">
            <div className="container px-4 mx-auto py-8 flex justify-center">

                {/* Left Column */}
                <div className="w-1/2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div id="donateList" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '16px' }}>
                        <h1 className="text-[45px] font-semibold mb-4 text-center">We provide ...</h1>

                        <div className="flex items-center gap-[60px] ">
                            <FaCheckCircle className="text-gray-500 text-2xl" />
                            <span className='text-lg text-gray-500'>Personalized routine</span>
                        </div>
                        <div className="flex items-center gap-[60px] mt-2">
                            <FaCheckCircle className="text-gray-500 text-2xl" />
                            <span className='text-lg text-gray-500'>Follow-up after completing courses</span>
                        </div>

                        <hr className='text-gray-500 w-[400px] mt-2' />


                        <div className="flex items-center gap-[60px] mt-2">
                            <FaCheckCircle className="text-[#9998E1] text-2xl" />
                            <div className='flex flex-col'>

                                <span className='text-2xl'>Access to additional resources</span>
                                <span className='text-gray-500 text-sm mt-2 '>
                                    We offer access to a variety of additional resources to <br /> enhance your experience,  including exclusive tools,<br /> guides, and support materials designed to help you <br /> achieve your goals more effectively.
                                </span>
                            </div>
                        </div>
                        <hr className='text-gray-500 w-[400px] mt-2' />
                        <div className="flex items-center gap-[60px] mt-5">
                            <FaCheckCircle className="text-gray-500 text-3xl" />
                            <span className='text-2xl text-gray-500'>Free community support</span>
                        </div>

                        <button className='border border-[#287279] text-[#287279] rounded-full p-3 font-semibold mt-3'> Learn More About Our Services </button>

                    </div>
                </div>

                {/* Right Column */}
                <div className="w-1/2 text-center">
                    <div className='relative'>
                        <img className='mt-5 rounded-md' src={b} />

                        <img src={v} className='absolute top-[10%] w-[74px] h-[74px] left-[-5%] ' />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Provide;
