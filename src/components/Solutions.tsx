import React, { useState } from "react";
import ByIndustry from "./ByIndustry";
import ByType from "./ByType";

function Solutions(): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    // <!-- Solution Section -->
    <section id="solutions">
      <div className="my-16 mx-auto p-10">
        <h3 className="font-bold text-3xl text-center text-[#4d4d4d] mb-20 md:text-left md:ml-16">
          Solutions
        </h3>
        <h5 className=" py-5 text-[18px] text-[#4D4D4D] lg:px-24">Featured</h5>
        <div className="flex flex-col space-y-6 mb-[67px] lg:flex-row lg:space-y-0 lg:space-x-12 lg:space-between">
          {/* <!-- item-1 --> */}
          <div className="flex flex-col-reverse border-2 border-[#4D4D4D] rounded-2xl hover:border-[#0000cc] hover:cursor-pointer md:flex-row md:space-y-0 md:space-x-12 md:justify-between">
            <div className="flex flex-col max-w-xs mx-auto space-y-2 p-4 items-center">
              <h4 className="text-xl font-bold mb-2 text-[#0000cc]">
                Swostha | Digital Health
              </h4>
              <p className="text-center text-grayishBlue">
                SWOSTHA is an innovative integrated health care platform to
                cater health delivery system that touches multiple channels to
                target the right patients at the right time and in the right way
              </p>
            </div>

            <div className="">
              <img
                src="../img/Smartwatch Mockup2@2x.png"
                alt=""
                className="w-full h-full bg-cover bg-center"
              />
            </div>
          </div>
          {/* <!-- item-2 --> */}
          <div className="flex flex-col-reverse border-2 border-[#4D4D4D] rounded-2xl hover:border-[#0000cc] hover:cursor-pointer md:flex-row md:space-y-0 md:space-x-12 md:justify-between">
            <div className="flex flex-col max-w-xs mx-auto space-y-2 p-4 items-center">
              <h4 className="text-xl font-bold mb-2 text-[#0000cc]">
                Swostha | Digital Health
              </h4>
              <p className="text-center text-grayishBlue">
                SWOSTHA is an innovative integrated health care platform to
                cater health delivery system that touches multiple channels to
                target the right patients at the right time and in the right way
              </p>
            </div>
            <div>
              <img
                src="../img/Smartwatch Mockup2@2x.png"
                alt=""
                className="w-full h-full bg-cover bg-center"
              />
            </div>
          </div>
        </div>

        <div>
          {/* <!-- Buttons --> */}
          <div className="mb-[24px] sm:flex sm:space-x-12">
            <button
              onClick={() => setToggle(false)}
              className="lg:px-[84px] lg:py-[19px] lg:w-[260px] lg:h-[60px] lg:m-[16px] font-bold text-[#4D4D4D] focus:text-[#0000cc] focus:border-b-4 focus:border-b-[#0000cc]"
            >
              By Industry
            </button>
            <button
              onClick={() => setToggle(true)}
              className="lg:px-[84px] lg:py-[19px] lg:w-[260px] lg:h-[60px] lg:m-[16px] font-bold text-[#4D4D4D] focus:text-[#0000cc] focus:border-b-4 focus:border-b-[#0000cc]"
            >
              By Type
            </button>
          </div>

          <div className="flex flex-col space-y-4  ">
            {!toggle && <ByIndustry />}
            {toggle && <ByType />}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Solutions;
