import React from 'react';
import ReactStars from "react-rating-stars-component";
import { PiBookOpenTextFill, PiClockFill } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
const CourseCard = ({ course, index }) => {
    const cardStyle = index === 1 ? "bg-[#F5F5Fc]" : ""
    return (
        <div className={`max-w-sm relative rounded-lg shadow-md overflow-hidden border ${cardStyle}`}>
            <img src={course.image}  alt={course.title} className="w-full h-48 object-cover" />

          
            {index === 1 && (
        <div className="absolute inset-0 flex justify-end items-start gap-2 p-2">
            <button className="bg-white p-3 text-[25px] rounded-full shadow-md text-gray-500">
             <IoCartOutline />
            </button>
            <button className="bg-white p-3 text-[25px] rounded-full shadow-md text-gray-500">
             <IoMdHeartEmpty />
            </button>
          
        </div>
    )}
            <div className="p-4">
                {/* Tags */}
                <div className="flex space-x-2 mb-2">
                    {course.tags.map((tag, index) => (


                        <span
                            key={index}
                            className={`${index === 1 ? "bg-[#F5FAD6]  border border-[#CDE533] text-xs font-medium px-2 py-1 rounded" : "bg-[#FFF5E6]  border border-[#FFC673] text-xs font-medium px-2 py-1 rounded"}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {/* Title */}
                <h3 className="font-semibold text-lg mb-2 mt-3">{course.title}</h3>
                {/* Ratings */}
                <div className="flex items-center  text-base mb-5 mt-5">

                    <ReactStars
                        count={5}
                        value={4.9}
                        size={20}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#FF9700"

                    />
                    <span className="font-bold text-sm mt-1 ml-2"> 4.9 ({course.reviews})</span>
                </div>
                {/* Details */}
                <div className="flex items-center gap-4">
                    <span className="flex gap-1 text-black font-semibold">
                        <PiClockFill className="text-xl mt-1 text-[#9998E1]" />
                        {course.duration}
                    </span>
                    <div className="w-px h-4 bg-gray-300" />
                    <span className="flex gap-1 text-black font-semibold">
                        <PiBookOpenTextFill className="text-xl mt-1 text-[#9998E1]" />
                        {course.lessons} Lessons
                    </span>
                </div>

                <hr className="border-t-2  mt-3 mb-3" />
                <div className="flex items-center justify-between mt-5 mb-3">
                    <div className="flex items-center space-x-2">
                        <img
                            src={course.authorImage}
                            alt={course.author}
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-bold">{course.author}</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">
                        {index === 2 ? (<div  className='flex text-sm border gap-1 border-[#C2C2C2] text-gray-500 bg-[#F2F2F2] p-1 rounded-lg'>
                            <FaCheckCircle className='mt-1 ' /> Enrolled

                        </div>) : (<span className='font-semibold text-2xl'> ${course.price} </span>) } 
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
