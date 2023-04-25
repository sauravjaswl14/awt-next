function About() {
  return (
    <section id="about">
      <div className="p-12 mb-12 lg:p-20 bg-[#4d4d4d] text-white max-w-screen mx-auto">
        {/* <!-- Flex-container --> */}
        <div className="flex flex-col-reverse justify-around lg:flex-row lg:space-y-0 lg:justify-between">
          {/* <!-- Content container --> */}
          <div className="flex flex-col space-y-6 max-w-lg md:max-w-xl">
            <h2 className="mt-[20px] font-bold text-3xl lg:text-4xl">
              Unlock the power of the cloud with Nepal's premier cloud company.
            </h2>

            <p>
              With our cutting-edge technology and dedicated team of experts, we
              offer reliable, secure, and scalable cloud solutions tailored to
              your business needs. Whether you're a small startup or a large
              enterprise, we have a solution that fits your budget and
              requirements. Take your business to new heights with our closed
              services and experience the benefits of increased productivity,
              reduced costs, and hassle-free IT management. Trust us to keep
              your data safe and your data safe and your business running
              smoothly, Contact us today to learn more about our services and
              how we can help your business thrive in the digital age
            </p>

            <a
              href="#"
              className="flex justify-center items-center py-3 px-5 w-[220px] h-[44px] border-2 border-white rounded-md hover:text-[#0000cc] hover:bg-gray-300 hover:border-black duration-150"
            >
              Learn More
            </a>
          </div>
          <div>
            <img src="../img/blank_billboard.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
