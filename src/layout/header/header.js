import React from 'react'
import { Link } from 'react-router-dom'
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";

export default function Header() {
    return (
      <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px]">
      {/* <img
        src="/images/logo.svg"
        alt=""
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      /> */}
        <span className="text-white">NFT GENERATOR</span>
        <div className="hidden ml-10 md:flex items-center space-x-6">
          <Link to="/" className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </Link>
          <Link to="/" className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Soon</span>
          </Link>
        </div>
    </header>
    )
}
