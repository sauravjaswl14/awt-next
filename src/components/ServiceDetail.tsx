import { ServicesData } from "../model/data";

function ServiceDetail(): JSX.Element {
  return (
    <section
      id="service_panel"
      className="absolute bg-[#e5e5e5] top-[140px] left-0  overflow-hidden z-1000 w-screen lg:h-[500px]"
    >
      <div className=" container">
        {/* <!-- parent flex container --> */}
        <div className="flex flex-col md:flex-row">
          {/* <!-- left flex container --> */}
          <div className="flex flex-col space-y-4 pl-24 pr-8 py-4 border-r-4 border-r-gray-400">
            {ServicesData.services.map((service, index) => {
              return (
                <p
                  key={index}
                  className="text-[18px] text-[#4d4d4d] font-bold whitespace-nowrap"
                >
                  {service}
                </p>
              );
            })}
          </div>
          {/* <!-- right flex container --> */}
          <div className="flex flex-col space-y-6 p-4 pr-8">
            <h2 className="text-[24px] font-bold text-[#4d4d4d]">
              Data Protection
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-2">
              {ServicesData.details.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col space-y-2">
                    <h4 className="text-[#4d4d4d] text-[16px] font-bold">
                      {item.service}
                    </h4>
                    <p className="max-w-lg text-sm text-[#4d4d4d]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServiceDetail;
