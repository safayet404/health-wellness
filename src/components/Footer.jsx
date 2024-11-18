import React from "react";

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
    return (

        <div className="bg-[#F4F4F6] ">

            <div className="container  flex-wrap justify-between mx-auto px-4 py-8">

                <div className="flex flex-wrap justify-between p-5">
                    <div className="">
                        <h1 className="text-sm text-gray-500 mb-5">Categories</h1>
                        <ul >
                            <li className="text-gray-600 mb-3">Nutrition and diet</li>
                            <li className="text-gray-600 mb-3">Fitness training</li>
                            <li className="text-gray-600 mb-3">Mindfulness</li>
                            <li className="text-gray-600 mb-3">Mental health</li>
                            <li className="text-gray-600 mb-3">Personal growth</li>
                            <li className="text-gray-600 mb-3">Social well-being</li>
                        </ul>


                    </div>
                    <div>
                        <h1 className="text-sm text-gray-500 mb-5">About</h1>
                        <ul>
                            <li className="text-gray-600 mb-3">About us</li>
                            <li className="text-gray-600 mb-3">Our Partners</li>
                            <li className="text-gray-600 mb-3">Investors</li>
                            <li className="text-gray-600 mb-3">Career</li>
                        </ul>

                    </div>
                    <div>
                        <h1 className="text-sm text-gray-500 mb-5">Resources</h1>
                        <ul>
                            <li className="text-gray-600 mb-3">FAQ</li>
                            <li className="text-gray-600 mb-3">Refund policies</li>
                            <li className="text-gray-600 mb-3">Terms and conditions</li>
                            <li className="text-gray-600 mb-3">Cookie</li>
                            <li className="text-gray-600 mb-3">Latest posts</li>
                        </ul>

                    </div>
                    <div>
                        <h1 className="text-sm text-gray-500 mb-5">Support</h1>
                        <ul>
                            <li className="text-gray-600 mb-3">Get in touch</li>
                            <li className="text-gray-600 mb-3">Visit our forum</li>
                        </ul>

                    </div>

                </div>

                <div className="border-t-2 border-dashed border-gray-300 w-full mt-5"></div>
                <div className="flex justify-between flex-wrap">
                    <span className="text-xl mt-5 mb-5 text-black">Join our official channels</span>
                    <div className="flex gap-4 mt-5 mb-5 text-3xl text-[#000000] opacity-50" >
                     <RiInstagramFill />
                     <FaFacebook />
                     <FaSquareXTwitter />
                     <FaDiscord />
                    </div>
                </div>

                <div className="border-t-2 border-dashed border-gray-300 w-full mt-5"></div>

                <span className="mt-5 mb-5 text-gray-600"> &copy; 2024 EduPath. All rights reserved </span>
            </div>

        </div>

    );
};

export default Footer;