import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { PiYoutubeLogoFill } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full pt-12 pb-5">
      <div className="flex flex-row gap-5">
        <div className="rounded-full bg-[#fff] p-2 cursor-pointer">
          <FaSquareInstagram size={20} color="black" />
        </div>
        <div className="rounded-full bg-[#fff] p-2 cursor-pointer">
          <BsTwitterX size={20} color="black" />
        </div>
        <div className="rounded-full bg-[#fff] p-2 cursor-pointer">
          <FaLinkedin size={20} color="black" />
        </div>
        <div className="rounded-full bg-[#fff] p-2 cursor-pointer">
          <PiYoutubeLogoFill size={20} color="black" />
        </div>
      </div>

      <div className="flex flex-col text-center md:flex-row flex-wrap gap-6 md:gap-10 mt-6">
        <span className="text-md nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300">
          Home
        </span>
        <span className="text-md nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300">
          News
        </span>
        <span className="text-md nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300">
          About
        </span>
        <span className="text-md nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300">
          Contact Us
        </span>
        <span className="text-md nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300">
          Our Team
        </span>
      </div>

      <div className="mt-16">
        <Link href="https://tryintent.com" target="_blank">
          <span className="text-sm text-[#A3A3A3] font-bold cursor-pointer">
            {new Date().getFullYear()} © IntentJs. All rights reserved.
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
