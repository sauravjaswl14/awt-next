//props: ServiceProps

import {
  Service,
  ServicesType,
  AllServices,
  datas,
} from "@/model/ServicesData";

function service() {
  // const { icon, name, desc } = props;
  return (
    <div className="flex items-center justify-center px-8 hover:cursor-pointer">
      <div className="flex flex-col space-y-4">
        <div>
          {/* <!-- svg --> */}
          <img src="../img/new/cloud-services-icon.png" alt="" />
        </div>
        <p className="font-thin text-sm">Cloud Services</p>
      </div>
    </div>
  );
}
export default service;
