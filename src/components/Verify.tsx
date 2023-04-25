function Verify() {
  return (
    <section className="bg-[#e5e5e5]">
      <div className="container max-w-screen  mx-auto p-10 h-[939px]">
        <div className="flex flex-col mt-24 items-center justify-between space-y-6 lg:space-y-12">
          <h2 className="text-[48px] text-[#0000cc] font-bold text-center">
            Verification
          </h2>
          <p className="text-center text-[32px] max-w-4xl text-[#4d4d4d] font-bold">
            Please enter the six digit OTP verification code sent to your
            registered number
          </p>
          {/* <!-- Flex Container --> */}
          <div className="container max-w-sm flex space-x-2 lg:space-x-6 justify-center text-[#000]">
            <div className="relative flex justify-center items-center bg-white w-6 h-12 lg:w-[122px] lg:h-[147px] py-8 px-6  md:py-[31px] md:px-[40px] text-[#000] rounded-md">
              <input
                type="text"
                className="left-4 md:left-8 absolute outline-none w-6 lg:w-12 text-2xl font-bold placeholder:text-black lg:text-4xl"
                placeholder="2"
              />
            </div>
            <div className="relative flex justify-center items-center bg-white w-6 h-12 lg:w-[122px] lg:h-[147px] py-8 px-6  md:py-[31px] md:px-[40px] text-[#000] rounded-md">
              <input
                type="text"
                className="left-4 md:left-8 absolute outline-none w-6 lg:w-12 text-2xl font-bold placeholder:text-black lg:text-4xl"
                placeholder="4"
              />
            </div>
            <div className="relative flex justify-center items-center bg-white w-6 h-12 lg:w-[122px] lg:h-[147px] py-8 px-6  md:py-[31px] md:px-[40px] text-[#000] rounded-md">
              <input
                type="text"
                className="left-4 md:left-8 absolute outline-none w-6 lg:w-12 text-2xl font-bold placeholder:text-black lg:text-4xl"
                placeholder="7"
              />
            </div>
            <div className="relative flex justify-center items-center bg-white w-6 h-12 lg:w-[122px] lg:h-[147px] py-8 px-6  md:py-[31px] md:px-[40px] text-[#000] rounded-md">
              <input
                type="text"
                className="left-4 md:left-8 absolute outline-none w-6 lg:w-12 text-2xl font-bold placeholder:text-black lg:text-4xl"
                placeholder="9"
              />
            </div>
            <div className="relative flex justify-center items-center bg-white w-6 h-12 lg:w-[122px] lg:h-[147px] py-8 px-6  md:py-[31px] md:px-[40px] text-[#000] rounded-md">
              <input
                type="text"
                className="left-4 md:left-8 absolute outline-none w-6 lg:w-12 text-2xl font-bold placeholder:text-black lg:text-4xl"
                placeholder="8"
              />
            </div>
            <div className="relative flex justify-center items-center bg-white w-6 h-12 lg:w-[122px] lg:h-[147px] py-8 px-6  md:py-[31px] md:px-[40px] text-[#000] rounded-md">
              <input
                type="text"
                className="left-4 md:left-8 absolute outline-none w-6 lg:w-12 text-2xl font-bold placeholder:text-black lg:text-4xl"
                placeholder="6"
              />
            </div>
          </div>
          <p className="text-lg text-[#4d4d4d]">Resending code in 00:58</p>
          <p>
            Didn't get the code yet?
            <button className="text-[#0000cc] ml-2 outline-none border-b-2 border-[#0000cc]">
              Resend code
            </button>
          </p>

          <button className="flex items-center justify-center py-3 px-5 w-[260px] h-[44px] bg-[#0000cc] text-white rounded-lg hover:bg-gray-400 hover:text-[#0000cc] duration-200">
            Verify
          </button>
        </div>
      </div>
    </section>
  );
}
export default Verify;
