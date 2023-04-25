import React from "react";

function ByType() {
  return (
    <div
      id="by-type"
      className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6"
    >
      {/* <!-- Item-1 --> */}
      <div className="flex flex-col w-[398px] h-[139px] px-5 py-3 space-y-4">
        <div className="flex space-x-2">
          <img src="../img/app-development-icon.svg" alt="" />
          <h5 className="text-[#4D4D4D] font-bold">Application Developer</h5>
        </div>

        <p className="text-grayishBlue text-sm">
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
      {/* <!-- Item-2 --> */}
      <div className="flex flex-col w-[398px] h-[139px] px-5 py-3 space-y-4">
        <div className="flex space-x-2">
          <img src="../img/web-dev-icon.svg" alt="" />
          <h5 className="text-[#4D4D4D] font-bold">Web Development</h5>
        </div>

        <p className="text-grayishBlue text-sm">
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
      {/* <!-- Item-3 --> */}
      <div className="flex flex-col w-[398px] h-[139px] px-5 py-3 space-y-4">
        <div className="flex space-x-2">
          <img src="../img/paas-icon.svg" alt="" />
          <h5 className="text-[#4D4D4D] font-bold">Platform as a Service</h5>
        </div>

        <p className="text-grayishBlue text-sm">
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
    </div>
  );
}
export default ByType;
