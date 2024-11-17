import React from 'react';
import ReactStars from "react-rating-stars-component";
import b from "../assets/b1.png"
import v from "../assets/v1.png"
const Banner = () => {
    return (
        <div className="bg-[#F0F1EE] w-full flex justify-center items-center">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 items-center justify-center">
                    <div className="flex flex-col items-start justify-center text-left px-[115px]">
                        <div className="flex flex-row items-center  ">
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

                        <p className="text-black font-bold text-[58px] ">
                            #1 Platform Powering Health and Wellness
                        </p>
                        
                        <span className='text-[28px] mt-5 text-black font-semibold'>We're restoring home as the primary place of personal well-being</span>
                        <span className='mt-5 text-sm'>Health is not just about what you're eating.It's also about what you're thinking and saying</span>

                        <div className='flex mt-5 gap-5'>
                            <button className='bg-[#287279] text-white p-4 text-sm rounded-full'>Browse Courses</button>
                            <button className='border border-[#287279] rounded-full p-4 text-[#287279]'>Get Started</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-[150px] overflow-hidden ">
                        <div className='relative'>
                            <img alt=" " src={b} className='w-[648px] h-[760px] mb-5 rounded-lg' />
                            <div className='absolute top-[120px] left-[-20px] h-[50px] w-[50px]'>
                                <img alt=" " src={v} />
                            </div>

                            <div className='absolute bottom-[110px] left-3 right-3 p-5 bg-white bg-opacity-80 rounded-lg'>


                                <div class="flex justify-between items-center">
                                    <p class="text-4xl font-bold">12,000+</p>
                                    <p class="text-lg">Happy learners rely on us regularly</p>
                                </div>
                              
                                
                            </div>
                            <div className='absolute bottom-[40px] left-3 right-3 p-5 bg-white rounded-lg'>


                                <div class="flex justify-between items-center">
                                    <p class="text-4xl font-bold">12,000+</p>
                                    <p class="text-lg">Happy learners rely on us regularly</p>
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