import {
  Service,
  ServicesType,
  AllServices,
  datas,
} from "@/model/ServicesData";

function ServiceModal(props: { data: Service[] }) {
  const { data } = props;

  return (
    <section id="modal">
      <div className=" container bg-[#e5e5e5] mt-10 p-10 max-w-full md:p-5">
        {/* <!-- Grid Container --> */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-rows-2">
          {/* <!-- Flex Container --> */}
          {data.map((service) => {
            return (
              <div
                key={service.id}
                className="flex flex-col space-y-5 max-w-sm"
              >
                <div className="flex space-x-2">
                  {/* <!-- icon --> */}
                  <img src={service.icon} alt="" />
                  {/* <!-- heading --> */}
                  <h4>{service.name}</h4>
                </div>
                <p>{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default ServiceModal;
