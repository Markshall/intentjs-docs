import React from "react";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { PiShootingStar } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";
import { PiHandHeart } from "react-icons/pi";
import { PiArrowUpRightBold } from "react-icons/pi";

const Community = () => {
  return (
    <div className="flex flex-col">
      <p className="nx-mb-3.5 nx-font-semibold nx-tracking-tight">Community</p>
      <ul>
        <li className="nx-my-2 nx-scroll-my-6 nx-scroll-py-6">
          <a className="nx-font-semibold nx-inline-block nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words">
            <span className="flex flex-row items-center gap-2 cursor-pointer">
              <PiPencilSimpleLineLight />
              Edit this page
              <PiArrowUpRightBold />
            </span>
          </a>
        </li>
        <li className="nx-my-2 nx-scroll-my-6 nx-scroll-py-6">
          <a className="nx-font-semibold nx-inline-block nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words">
            <span className="flex flex-row items-center gap-2 cursor-pointer">
              <PiShootingStar />
              Star on GuitHub
              <PiArrowUpRightBold />
            </span>
          </a>
        </li>
        <li className="nx-my-2 nx-scroll-my-6 nx-scroll-py-6">
          <a className="nx-font-semibold nx-inline-block nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words">
            <span className="flex flex-row items-center gap-2 cursor-pointer">
              <MdOutlineMessage />
              Chat on Discord
              <PiArrowUpRightBold />
            </span>
          </a>
        </li>
        <li className="nx-my-2 nx-scroll-my-6 nx-scroll-py-6">
          <a className="nx-font-semibold nx-inline-block nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words">
            <span className="flex flex-row items-center gap-2 cursor-pointer">
              <PiHandHeart />
              Become a Sponsor
              <PiArrowUpRightBold />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Community;
