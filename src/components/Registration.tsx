function Registration(): JSX.Element {
  return (
    <section id="register" className="bg-[#e5e5e5]">
      <div className="container mx-auto max-w-screen h-full p-8">
        <div className="flex flex-col items-center space-y-6 lg:my-10 md:items-start">
          <h2 className="font-extrabold text-3xl text-center text-[#0000cc] md:text-start">
            Registration
          </h2>
          <h4 className="text-xl text-[#4d4d4d] font-semibold mb-20">
            Let's fill your other important details
          </h4>
          <form className="flex flex-col space-y-10 w-full lg:space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 w-100">
              <input
                type="text"
                value="9812345678"
                className="py-5 px-8 outline-none rounded-lg"
              />
              <input
                type="text"
                placeholder="Enter your username"
                className="py-5 px-8 outline-none rounded-lg"
              />
              <input
                type="text"
                placeholder="Enter your email address"
                className="py-5 px-8 outline-none rounded-lg"
              />
              <input
                type="password"
                placeholder="Enter password"
                className="py-5 px-8 outline-none rounded-lg"
              />
              <input
                type="password"
                placeholder="Re-enter Password"
                className="py-5 px-8 outline-none rounded-lg"
              />
              <input
                type="text"
                placeholder="First Name"
                className="py-5 px-8 outline-none rounded-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="py-5 px-8 outline-none rounded-lg"
              />

              <select
                name="country"
                id="country"
                className="py-5 px-8 outline-none rounded-lg"
              >
                <option value="US">US</option>
                <option value="nepal">Nepal</option>
                <option value="singapore">Singapore</option>
                <option value="Europe">Europe</option>
              </select>
            </div>
            {/* <!--Sign up Button --> */}
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <button
                type="submit"
                className="flex items-center justify-center py-3 px-8 w-[260px] h-[44px] text-white bg-[#0000cc] rounded-md"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-xs text-[#4d4d4d] underline underline-[#4d4d4d]">
            By signing up you agree to our Terms & Conditions, and our Privacy
            Policy
          </p>
        </div>
      </div>
    </section>
  );
}
export default Registration;
