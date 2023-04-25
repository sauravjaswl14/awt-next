import React from "react";

function ByIndustry() {
  return (
    <div
      id="by-industry"
      className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-2 max-w-screen "
    >
      {/* <!-- Item-1 --> */}
      <div className="flex flex-col w-[398px] h-[139px] px-5 py-3 space-y-4 flex-wrap ">
        <div className="flex space-x-2">
          <img src="../img/enterprise-icon.svg" alt="" />
          <h5 className="text-[#4D4D4D] font-bold">Enterprise</h5>
        </div>

        <p className="text-grayishBlue text-sm max-w-sm lg:max-w-md ">
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
      {/* <!-- Item-2 --> */}
      <div className="flex flex-col w-[398px] h-[139px] px-5 py-3 space-y-4 flex-wrap">
        <div className="flex space-x-2">
          <img src="../img/healthcare-icon.svg" alt="" />
          <h5 className="text-[#4D4D4D] font-bold">Healthcare</h5>
        </div>

        <p className="text-grayishBlue text-sm">
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
      {/* <!-- Item-3 --> */}
      <div className="flex flex-col w-[398px] h-[139px] px-5 py-3 space-y-4 flex-wrap">
        <div className="flex space-x-2">
          <img src="../img/education-icon.svg" alt="" />
          <h5 className="text-[#4D4D4D] font-bold">Education</h5>
        </div>

        <p className="text-grayishBlue text-sm">
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
      {/* <!-- Item-4 --> */}
      <div className="flex flex-col w-[398px] h-[139px] px-5 py-3 space-y-4 flex-wrap">
        <div className="flex space-x-2">
          <img src="../img/financial-icon.svg" alt="" />
          <h5 className="text-[#4D4D4D] font-bold">Financial</h5>
        </div>

        <p className="text-grayishBlue text-sm">
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
      {/* <!-- Item-5 --> */}
      <div className="flex flex-col w-[398px] h-[139px] px-5 py-3 space-y-4 flex-wrap">
        <div className="flex space-x-2">
          <img src="../img/manufacturing-icon.svg" alt="" />
          <h5 className="text-[#4D4D4D] font-bold">Manufacturing</h5>
        </div>

        <p className="text-grayishBlue text-sm">
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
    </div>
  );
}
export default ByIndustry;
