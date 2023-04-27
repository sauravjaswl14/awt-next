import ServiceModal from "./ServiceModal";

function Services(): JSX.Element {
  return (
    <>
      {/* <!-- Services --> */}
      <section id="services" className="max-w-full">
        <div className="relative mx-auto mt-9 max-w-screen">
          <h3 className="font-bold text-3xl text-center text-[#4d4d4d] mb-12 md:text-left md:ml-16">
            Services
          </h3>
          {/* <!-- Services list -1 --> */}
          <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-7">
            {/* <!-- Item-1 --> */}
            <div className="flex items-center justify-center px-8 hover:cursor-pointer">
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/compute.svg" alt="" />
                </div>
                {/* <!-- <p className="">Compute</p> --> */}
              </div>
            </div>

            {/* <!-- Item-2 --> */}
            <div className="flex items-center justify-center px-8 hover:cursor-pointer">
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/security.svg" alt="" />
                </div>
                {/* <!-- <p className="">Compute</p> --> */}
              </div>
            </div>

            {/* <!-- Item-3 --> */}
            <div className="flex items-center justify-center px-8 hover:cursor-pointer">
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/iaas-icon.svg" alt="" />
                </div>
                {/* <!-- <p className="">Compute</p> --> */}
              </div>
            </div>

            {/* <!-- Item-4 --> */}
            <div className="flex items-center justify-center px-8 hover:cursor-pointer">
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/cloud-services-icon.svg" alt="" />
                </div>
                <p className="font-thin text-sm">Cloud Services</p>
              </div>
            </div>

            {/* <!-- Item-5 --> */}
            <div className="flex items-center justify-center px-8 hover:cursor-pointer">
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/management&support - icon.svg" alt="" />
                </div>
                <p className="font-thin text-sm">
                  Management & <br />
                  support
                </p>
              </div>
            </div>

            {/* <!-- Item-6 --> */}
            <div className="flex items-center justify-center px-8 hover:cursor-pointer">
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/saas-icon.svg" alt="" />
                </div>
                <p className="font-thin text-sm">Solution as a service</p>
              </div>
            </div>

            {/* <!-- Item-7 --> */}
            <div className="flex items-center justify-center px-8 hover:cursor-pointer">
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img
                    src="../img/database-protection-svgrepo-com.svg"
                    alt=""
                  />
                </div>
                <p className="font-thin text-sm">Data Protection</p>
              </div>
            </div>
            {/* <!-- Item-8 --> */}
            <div className="flex items-center justify-center px-8 hover:cursor-pointer">
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/managed-security-icon.svg" alt="" />
                </div>
                <p className="font-thin text-sm">Managed Security</p>
              </div>
            </div>
            {/* <!-- Item-9 --> */}
            <div className="flex items-center justify-center px-8 hover:cursor-pointer">
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/it-essentials-icon.svg" alt="" />
                </div>
                <p className="font-thin text-sm">IT Essentials</p>
              </div>
            </div>
            {/* <!-- Item-10 --> */}
            <div className="flex items-center justify-center px-8 hover:cursor-pointer">
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/storage-icon.svg" alt="" />
                </div>
                <p className="font-thin text-sm">Storage</p>
              </div>
            </div>
            {/* <!-- Item-9 --> */}
            <div className="flex items-center justify-center px-8 hover:cursor-pointer">
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/it-essentials-icon.svg" alt="" />
                </div>
                <p className="font-thin text-sm">Collaboration</p>
              </div>
            </div>

            {/* <!-- End of Services --> */}
          </div>
        </div>
      </section>
      {/* ServiceModal */}
      <ServiceModal />
    </>
  );
}
export default Services;
