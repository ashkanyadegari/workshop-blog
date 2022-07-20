import Link from "next/link";
import React from "react";

const Header = ({handleHidden}) => {
    return (
        <div className="container flex flex-col justify-center items-center">
          <div className="text-7xl font-black mb-4">Workshop Blog</div>
          <div className="mb-6">Follow my journey to become the best engineer in the world</div>
          <div className="bg-red-100 text-red-500 px-4 py-2">Boilerplate Code for Le Wagon</div>
        </div>
    );
};

export default Header;
