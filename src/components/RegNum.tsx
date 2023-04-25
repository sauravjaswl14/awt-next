function RegNum() {
  return (
    <section className="bg-[#e5e5e5]">
      <div className="container max-w-screen min-h-screen mx-auto p-10">
        <div className="flex flex-col items-center justify-between space-y-10 mt-40">
          <h2 className="text-4xl text-[#0000cc] font-extrabold text-center">
            Let's get you started
          </h2>
          <p className="text-center text-xl text-[#4d4d4d] font-bold">
            Please enter your number here and proceed to the next step.
          </p>
          {/* <!-- Flex Container --> */}
          <div className="container max-w-lg flex space-x-2 justify-center items-center text-[#4d4d4d]">
            <div>
              <select
                name="country"
                id="country"
                className="flex items-center justify-around py-3 w-20 px-4 rounded-md font-bold outline-none"
              >
                <option value="nepal">NP</option>
                <option value="india">IN</option>
              </select>
            </div>
            <input
              type="text"
              className="flex flex-1 justify-center items-center bg-white w-6 h-10 py-[25px] px-[35px] text-2xl text-[#4d4d4d] rounded-md outline-none placeholder:text-xs placeholder:text-start placeholder:text-[#ccc]"
              placeholder="Please enter your phone number"
            />
            <button
              className="flex justify-center items-center py-3 px-5 bg-[#0000cc] rounded-md"
              type="submit"
            >
              <svg
                // style="color: white"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default RegNum;
