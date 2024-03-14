import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <header className="w-full z-10 bg-[#2F0F35] border-[1px] border-[#855E98] overflow-hidden">
      <nav className="containerWidth flex flex-wrap justify-between items-center py-4 lg:py-0 text-lg h-20 text-[#d8d8d8] ">
        <div className="text-base text-[#d8d8d8] lg:text-lg font-semibold flex  w-full justify-between items-center">
          <div className="lg:flex gap-20 items-center">
            <a href="#" className="lg:text-base lg:font-semibold">
              <img
                src="/suinfiIconNavbar.png"
                alt=""
                className="min-w-7 ml-7"
              />
            </a>

            <a className="block hover:text-[#9468a9] text-nowrap" href="#">
              Categorías
            </a>
            <a className="block hover:text-[#9468a9] text-nowrap" href="#">
              SECCIÓN 2
            </a>
            <a className="block hover:text-[#9468a9] text-nowrap" href="#">
              SECCIÓN 3
            </a>
            <a className="block hover:text-[#9468a9] text-nowrap" href="#">
              Vender
            </a>
          </div>

          <div className="lg:flex gap-10 mr-10 ml-10">
            <form className="relative items-center">
              <input
                type="text"
                value=""
                className="relative flex w-[200px] h-7 lg:h-9 lg:w-[400px] rounded-full border-none bg-gradient-to-r from-[#4f1f57] to-[#2f0f35] pl-5 pr-12 text-[#d8d8d8] outline-none focus:cursor-text font-normal searchValue"
              />
              <img
                src="/searchIcon.png"
                alt=""
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer min-w-7"
              />
            </form>

            <Link href="/auth">
              <img
                src="/userIconNavBar.png"
                alt=""
                className="hover:cursor-pointer  min-w-7"
              />
            </Link>

            <a href="">
              <img
                src="/ShoppingCart.png"
                alt=""
                className="hover:cursor-pointer min-w-10"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
