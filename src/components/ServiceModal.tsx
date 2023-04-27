function ServiceModal() {
  return (
    <section id="modal">
      <div className="container bg-[#e5e5e5] mt-8 p-8 max-w-full lg:h-[710px] md:p-5">
        {/* <!-- Grid Container --> */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-rows-2">
          {/* <!-- Flex Container --> */}
          <div className="flex flex-col space-y-5 max-w-sm">
            <div className="flex space-x-2">
              {/* <!-- icon --> */}
              <img src="../img/icons/cloud-server-icon.png" alt="" />
              {/* <!-- heading --> */}
              <h4>Cloud Server</h4>
            </div>
            <p>
              Robust cloud architecture that delivers the perfect balance of
              speed and reliability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServiceModal;
