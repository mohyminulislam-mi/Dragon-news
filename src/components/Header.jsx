import React from "react";
import Logo from "../assets/logo.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="w-11/12 m-auto">
      <div className="flex justify-center items-center flex-col mt-7">
        <img src={Logo} alt="Logo" />
        <p className="text-accent py-2">Journalism Without Fear or Favour</p>
        <div>
          <p className="font-semibold">
            {format(new Date(), "EEEE, MMMM dd, yyyy")}
          </p>
        </div>
      </div>
      {/* Headline  */}
      <div className="flex items-center bg-base-300 my-6">
        <p className="bg-primary ml-3 px-4 py-2 text-white">Latest</p>

        <div className="pl-5 py-4 ">
          <Marquee
            speed={50}
            pauseOnHover={true}
            className=" flex gap-5 cursor-pointer"
          >
            <p>
              🚀 Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
            <p>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
            <p>
              🚀 Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
