import React from 'react';
import ReactStars from "react-rating-stars-component";
import b from "../assets/b1.png"
import v from "../assets/v1.png"

const Banner = () => {
    return (
        <div className="bg-[#F0F1EE] w-full flex justify-center items-center">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10 mt-[130px] lg:mt-[100px] md:mt-[100px] ">
                  
                    <div className="flex flex-col items-start justify-center text-left px-4 ">
                        <div className="flex flex-row items-center">
                            <ReactStars
                                count={5}
                                value={4.9}
                                size={30}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#FF9700"
                            />
                            <span className="p-3 text-black text-xl">4.9 (566)</span>
                        </div>

                        <p className="text-black font-bold text-[28px] lg:text-[58px] md:text-[50px] ">
                            #1 Platform Powering Health and Wellness
                        </p>
                        
                        <span className='text-[15px] lg:text-[28px] md:text-[24px] mt-5 text-black font-semibold'>
                            We're restoring home as the primary place of personal well-being
                        </span>
                        <span className='mt-5 text-sm'>
                            Health is not just about what you're eating. It's also about what you're thinking and saying.
                        </span>

                        <div className='flex mt-5 gap-5'>
                            <button className='bg-[#287279] text-white p-4 text-sm rounded-full'>
                                Browse Courses
                            </button>
    
                            <button className='border border-[#287279] rounded-full p-4 text-[#287279]'>
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-[30px] lg:mt-[150px] md:mt-[130px]">
                        <div className='relative'>
                            <img alt="banner" src={b} className='w-[548px] lg:w-[648px] md:w-[440px] h-[450px] lg:h-[760px] md:h-[650] mb-5 rounded-lg' />
                            <div className='absolute top-[120px] left-[-20px] h-[50px] w-[50px]'>
                                <img alt="v-icon" src={v} />
                            </div>

                            <div className='absolute bottom-[110px] left-3 right-3 p-5 bg-white bg-opacity-80 rounded-lg'>
                                <div className="flex justify-between items-center">
                                    <p className="text-base  lg:text-4xl md:text-2xl font-bold">12,000+</p>
                                    <div className="h-[50px] border-l-2 border-gray-500 mx-4"></div>
                                    <p className="text-sm w-[50%] lg:text-xl md:text-sm font-semibold">Happy learners rely on  <br/>us regularly</p>
                                </div>
                            </div>

                            <div className='absolute bottom-[50px] lg:bottom-[30px] md:bottom-[40ox] left-3 right-3 p-5 bg-white rounded-lg'>
                                <div className="flex justify-between items-center">
                                    <p className="text-xs lg:text-base md:text-xs font-semibold">Find your wllbeing</p>
                                    <p className="text-[8px]  lg:text-sm md:text-[8px] text-gray-600">By prioritizing self-care and making informed choices,<br/> one can enhance their overall quality of life</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
