import React from 'react';
import CourseCard from './CourseCard';
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png'
import a3 from '../assets/a3.png'
import a4 from '../assets/a4.png'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const courses = [
  {
    title: 'Foundation of Sleep: Sleep Science and Sleep Disorders',
    image: one,
    tags: ['Beginner', 'Nutrition and Diet'],
    rating: 4.9,
    reviews: 566,
    duration: '6h 34m',
    lessons: 3,
    author: 'Kilian Murphe',
    authorImage: a1,
    price: 40,
  },
  {
    title: 'Parenting in the Digital Age: Navigating Screen Time',
    image: two,
    tags: ['Intermediate', 'Health and Wellness'],
    rating: 4.9,
    reviews: 456,
    duration: '6h 34m',
    lessons: 3,
    author: 'Sarah Hopkins',
    authorImage: a2,
    price: 50,
  },
  {
    title: 'Holistic Health: Integrating Mind, Body, and Spirit',
    image: three,
    tags: ['Beginner', 'Nutrition and Diet'],
    rating: 4.9,
    reviews: 566,
    duration: '6h 34m',
    lessons: 3,
    author: 'Luna Karim',
    authorImage: a3,
    price: "Enrolled",
  },
  {
    title: 'Introduction to healthy Diet and Nutrition',
    image: four,
    tags: ['Beginner', 'Nutrition and Diet'],
    rating: 4.9,
    reviews: 566,
    duration: '6h 34m',
    lessons: 3,
    author: 'Kate Winslat',
    authorImage: a4,
    price: 40,
  },

];


const CourseList = () => {
  return (
    <div className=' bg-white '>

      <div className="container mx-auto px-4 py-8 ">
        <h2 className="text-base lg:text-3xl md:text-2xl font-bold mb-4 text-left">Our popular courses</h2>
        <div className='flex justify-between'>

          <p className="text-gray-500 text-[8px] lg:text-base md:text-base text-left mb-8 w-[60%] lg:w-[40%] md:w-[40%]">
            By taking proactive steps to nurture mental health, we can enhance our quality of life,
            build resilience, and foster a sense of inner peace and balance.
          </p>

          <span className='flex gap-5'>

            <IoIosArrowBack className='text-[35px] lg:text-[50px] md:text-[50px] border rounded-full p-2 text-gray-400' />
            <IoIosArrowForward className='text-[35px] lg:text-[50px] md:text-[50px] border border-black rounded-full p-2 ' />
          </span>

          <div>
          </div>



        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
