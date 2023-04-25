function Description() {
  return (
    <section>
      <div className="max-w-screen mx-auto mt-12 mb-12">
        <div className="flex flex-col-reverse p-4 items-center justify-center lg:flex-row lg:space-y-0 lg:space-x-12">
          {/* <!-- image --> */}
          <div className="m-6">
            <img src="../img/illustration.png" alt="" />
          </div>

          {/* <!-- Content --> */}
          <div className="flex flex-col items-center justify-center mb-5 max-w-lg space-y-6 text-[#4d4d4d] lg:space-y-8 lg:items-start">
            <h3 className="text-2xl font-bold md:text-4xl">
              Why AccessWorld Tech?
            </h3>
            <p className="font-semibold text-base">
              We want you to experience the convenience of locally sourced cloud
              services with customizable plans, a data center in Nepal, and
              exclusive support, all without the need for international payment
              methods.
            </p>
            <a
              href="#"
              className="flex items-center justify-center text-black border-2 border-black py-3 px-5 w-[220px] h-[44px] rounded-md hover:text-white hover:bg-[#0000cc] duration-150"
            >
              Contact US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Description;
