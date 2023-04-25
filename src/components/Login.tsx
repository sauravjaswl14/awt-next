function Login() {
  return (
    <section id="login">
      <div className="flex flex-col max-w-screen lg:flex-row lg:h-screen">
        <div className="login-img relative bg-contain bg-center">
          <img src="../img/bg-image@2x.png" alt="" className="h-full" />
          <div className="absolute top-10 left-12 flex flex-col space-y-2 md:top-20 md:left-24 md:items-start md:space-y-6 lg:top-[200px] lg:left-[140px] lg:items-start">
            <h2 className="text-white text-3xl max-w-xl font-bold md:text-[48px] md:max-w-2xl">
              The access to your world
            </h2>
            <p className="text-white max-w-lg md:text-[28px] md:font-bold md:max-w-xl leading-8">
              Unlock your account and step into a world of personalized
              experiences, tailored just for you.
            </p>
            <p className="text-white max-w-xl lg:text-xl font-bold">
              Dont have an account yet?
            </p>
            <p className="text-white lg:text-2xl underline underline-white underline-offset-4 font-bold">
              Create a new account now
            </p>
          </div>
        </div>
        {/* <!-- Form --> */}
        <div className="flex flex-col p-10 bg-[#E5E5E5] lg:w-[830px]">
          <h3 className="uppercase font-bold text-2xl text-[#4d4d4d] mb-10">
            login
          </h3>
          <form className="flex flex-col space-y-8 text-[#4d4d4d]">
            <label htmlFor="username">Username</label>
            <div className="flex space-x-10 bg-white py-5 px-10 rounded-lg">
              <div>
                <img src="../img/user-circle-svgrepo-com.svg" alt="" />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Type your usrname here"
                className="border-none placeholder:text-gray-400"
              />
            </div>

            <label htmlFor="password">Password</label>
            <div className="flex space-x-10 bg-white py-5 px-10 rounded-lg">
              <div>
                <img src="../img/lock-circle.svg" alt="" />
              </div>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Type your password here"
                className="border-none placeholder:text-gray-400"
              />
            </div>

            <div className="flex justify-between">
              <div>
                <input type="checkbox" className="accent-purple-500" checked />{" "}
                Keep me logged in
              </div>
              <p className="text-[#0000cc] text-sm border-b-2 border-spacing-0 border-[#0000cc]">
                Forgot Password
              </p>
            </div>
            {/* <!--login button --> */}
            <div className="flex items-center justify-center mt-10">
              <button
                type="submit"
                className="flex items-center justify-center w-[260px] h[44px] bg-[#0000cc] text-white py-3 px-5 rounded-lg"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-10 flex flex-col items-center s justify-center lg:mt-20">
            <p className="text-xs text-[#4d4d4d]">Don't have an account yet?</p>
            <p className=" text-xs mb-10 text-[#4d4d4d]">Let's create one</p>
            <a
              href="#"
              className="flex items-center mt-4 justify-center py-2 px-4 w-[110px] h-[44px] bg-[#cbcbcb] rounded-lg"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
