import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaDiscord } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full pt-12 pb-5">
      <div className="flex flex-row gap-5">
        <div className="rounded-full bg-bgcolor dark:bg-darkfont text-darkfont dark:text-bgcolor hover:bg-main dark:hover:bg-main dark:hover:text-darkfont p-2 cursor-pointer">
          <Link href={"https://github.com/intentjs/core"}>
            <FaGithub size={20} />
          </Link>
        </div>
        <div className="rounded-full bg-bgcolor dark:bg-darkfont text-darkfont dark:text-bgcolor hover:bg-main dark:hover:bg-main dark:hover:text-darkfont p-2 cursor-pointer">
          <Link href={"https://discord.gg/5ambDUN7Ge"}>
            <FaDiscord size={20} />
          </Link>
        </div>
        <div className="rounded-full bg-bgcolor dark:bg-darkfont text-darkfont dark:text-bgcolor hover:bg-main dark:hover:bg-main dark:hover:text-darkfont p-2 cursor-pointer">
          <Link href={"https://x.com/vinayak2506"}>
            <BsTwitterX size={20} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col text-center md:flex-row flex-wrap gap-6 md:gap-10 mt-6">
        <Link href={"https://tryintent.com"}>
          <span className="text-md text-bgcolor dark:text-darkfont font-semibold cursor-pointer hover:text-main dark:hover:text-main">
            Home
          </span>
        </Link>
        <Link href={"https://tryintent.com/docs/installation"}>
          <span className="text-md text-bgcolor dark:text-darkfont font-semibold cursor-pointer hover:text-main dark:hover:text-main">
            Docs
          </span>
        </Link>
        <Link href="https://app.youform.com/forms/kmxapqv4" target="_blank">
          <span className="text-md text-bgcolor dark:text-darkfont font-semibold cursor-pointer hover:text-main dark:hover:text-main">
            Support
          </span>
        </Link>
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
