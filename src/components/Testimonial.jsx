import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a1 from '../assets/a1.png';
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Kilian Murphe",
        feedback:
            "I love the interactive elements and the community forums where I can connect with other learners.",
        image: a1,
    },
    {
        name: "Kilian Murphe",
        feedback:
            "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
        image: a1,
    },
    {
        name: "Kilian Murphe",
        feedback:
            "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging.",
        image: a1,
    },
    {
        name: "Kilian Murphe",
        feedback:
            "It's not just about physical health but mental and emotional well-being too.",
        image: a1,
    },
    {
        name: "Kilian Murphe",
        feedback:
            "I love the flexibility of the courses. I can learn at my own pace and revisit the material whenever I need to.",
        image: a1,
    },
    {
        name: "Kilian Murphe",
        feedback:
            "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging.",
        image: a1,
    },

];

const TestimonialSlider = () => {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1280,  
                settings: {
                    slidesToShow: 3, 
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,  
                },
            },
            {
                breakpoint: 880, 
                settings: {
                    slidesToShow: 2,  
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, 
                },
            },
            {
                breakpoint: 580, 
                settings: {
                    slidesToShow: 1,  
                },
            },
            {
                breakpoint: 480,  
                settings: {
                    slidesToShow: 1,  
                },
            },
        ],
    };

    return (
        <div className="w-full py-10 overflow-hidden">
            <h2 className=" text-base  md:text-3xl lg:text-4xl font-bold text-center mb-8 ">
                Learners love EduPath. See why <br/> they rate us 4.9 out of 5
            </h2>
            <div className="w-full">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4 flex justify-center items-center">
                            <div className="w-[300px] bg-[#EBEAF9] rounded-lg shadow-md p-6 flex flex-col items-start text-left">
                                <div className="flex justify-between items-center w-full">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full mb-4"
                                    />
                                    <span className="text-2xl text-[#9998E1]"><FaQuoteLeft /></span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
                                <p className="text-gray-600 text-base">"{testimonial.feedback}"</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="justify-center items-center mt-5 flex space-x-2">
                    <span className="w-5 h-5 bg-white border border-gray-300 rounded-full"></span>
                    <span className="w-5 h-5 bg-white border border-gray-300 rounded-full"></span>
                    <span className="w-5 h-5 bg-[#9998E1] border border-white rounded-full"></span>
                    <span className="w-5 h-5 bg-white border border-gray-300 rounded-full"></span>
                    <span className="w-5 h-5 bg-white border border-gray-300 rounded-full"></span>

                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
