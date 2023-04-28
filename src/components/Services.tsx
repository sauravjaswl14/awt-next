import React, { useState } from "react";
import ServiceModal from "./ServiceModal";
import {
  Service,
  ServicesType,
  AllServices,
  datas,
} from "@/model/ServicesData";

function Services(): JSX.Element {
  interface stateObj {
    compute: boolean;
    security: boolean;
    iaas: boolean;
    cloudServices: boolean;
    Management: boolean;
    saas: boolean;
    dataProtection: boolean;
    managedSecurity: boolean;
    itEssentials: boolean;
    storage: boolean;
    collaboration: boolean;
  }
  const [isModalOpen, setIsModalOpen] = useState<stateObj>({
    compute: false,
    security: false,
    iaas: false,
    cloudServices: false,
    Management: false,
    saas: false,
    dataProtection: false,
    managedSecurity: false,
    itEssentials: false,
    storage: false,
    collaboration: false,
  });

  function handleClick(service: string) {
    switch (service) {
      case "compute":
        setIsModalOpen((prev) => {
          return {
            ...prev,
            compute: !prev.compute,
            security: false,
            iaas: false,
            cloudServices: false,
            Management: false,
            saas: false,
            dataProtection: false,
            managedSecurity: false,
            itEssentials: false,
            storage: false,
            collaboration: false,
          };
        });
        break;
      case "security":
        setIsModalOpen((prev) => {
          return {
            ...prev,
            compute: false,
            security: !prev.security,
            iaas: false,
            cloudServices: false,
            Management: false,
            saas: false,
            dataProtection: false,
            managedSecurity: false,
            itEssentials: false,
            storage: false,
            collaboration: false,
          };
        });
        break;
      case "iaas":
        setIsModalOpen((prev) => {
          return {
            ...prev,
            compute: false,
            security: false,
            iaas: !prev.iaas,
            cloudServices: false,
            Management: false,
            saas: false,
            dataProtection: false,
            managedSecurity: false,
            itEssentials: false,
            storage: false,
            collaboration: false,
          };
        });
        break;
      case "cloudServices":
        setIsModalOpen((prev) => {
          return {
            ...prev,
            compute: false,
            security: false,
            iaas: false,
            cloudServices: !prev.cloudServices,
            Management: false,
            saas: false,
            dataProtection: false,
            managedSecurity: false,
            itEssentials: false,
            storage: false,
            collaboration: false,
          };
        });
        break;
      case "management":
        setIsModalOpen((prev) => {
          return {
            ...prev,
            compute: false,
            security: false,
            iaas: false,
            cloudServices: false,
            Management: !prev.Management,
            saas: false,
            dataProtection: false,
            managedSecurity: false,
            itEssentials: false,
            storage: false,
            collaboration: false,
          };
        });
        break;
      case "saas":
        setIsModalOpen((prev) => {
          return {
            ...prev,
            compute: false,
            security: false,
            iaas: false,
            cloudServices: false,
            Management: false,
            saas: !prev.saas,
            dataProtection: false,
            managedSecurity: false,
            itEssentials: false,
            storage: false,
            collaboration: false,
          };
        });
        break;
      case "dataProtection":
        setIsModalOpen((prev) => {
          return {
            ...prev,
            compute: false,
            security: false,
            iaas: false,
            cloudServices: false,
            Management: false,
            saas: false,
            dataProtection: !prev.dataProtection,
            managedSecurity: false,
            itEssentials: false,
            storage: false,
            collaboration: false,
          };
        });
        break;
      case "managedSecurity":
        setIsModalOpen((prev) => {
          return {
            ...prev,
            compute: false,
            security: false,
            iaas: false,
            cloudServices: false,
            Management: false,
            saas: false,
            dataProtection: false,
            managedSecurity: !prev.managedSecurity,
            itEssentials: false,
            storage: false,
            collaboration: false,
          };
        });
        break;
      case "itEssentials":
        setIsModalOpen((prev) => {
          return {
            ...prev,
            compute: false,
            security: false,
            iaas: false,
            cloudServices: false,
            Management: false,
            saas: false,
            dataProtection: false,
            managedSecurity: false,
            itEssentials: !prev.itEssentials,
            storage: false,
            collaboration: false,
          };
        });
        break;
      case "storage":
        setIsModalOpen((prev) => {
          return {
            ...prev,
            compute: false,
            security: false,
            iaas: false,
            cloudServices: false,
            Management: false,
            saas: false,
            dataProtection: false,
            managedSecurity: false,
            itEssentials: false,
            storage: !prev.storage,
            collaboration: false,
          };
        });
        break;
      case "collaboration":
        setIsModalOpen((prev) => {
          return {
            ...prev,
            compute: false,
            security: false,
            iaas: false,
            cloudServices: false,
            Management: false,
            saas: false,
            dataProtection: false,
            managedSecurity: false,
            itEssentials: false,
            storage: false,
            collaboration: !prev.collaboration,
          };
        });
        break;
    }
  }
  return (
    <>
      <section id="services" className="max-w-full">
        <div className="relative mx-auto mt-9 max-w-screen">
          <h3 className="font-bold text-3xl text-center text-[#4d4d4d] mb-12 md:text-left md:ml-16">
            Services
          </h3>
          {/* <!-- Services list -1 --> */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-7">
            {/* <!-- Item-1 --> */}
            <div
              onClick={() => handleClick("compute")}
              className="flex items-center justify-center px-8 hover:cursor-pointer"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/compute.png" alt="" />
                </div>
                {/* <!-- <p className="">Compute</p> --> */}
              </div>
            </div>

            {/* <!-- Item-2 --> */}
            <div
              onClick={() => handleClick("security")}
              className="flex items-center justify-center px-8 hover:cursor-pointer"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/security.png" alt="" />
                </div>
                {/* <!-- <p className="">Compute</p> --> */}
              </div>
            </div>

            {/* <!-- Item-3 --> */}
            <div
              onClick={() => handleClick("iaas")}
              className="flex items-center justify-center px-8 hover:cursor-pointer"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/iaas-icon.png" alt="" />
                </div>
                {/* <!-- <p className="">Compute</p> --> */}
              </div>
            </div>

            {/* <!-- Item-4 --> */}
            <div
              onClick={() => handleClick("cloudServices")}
              className="flex items-center justify-center px-8 hover:cursor-pointer"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/cloud-services-icon.png" alt="" />
                </div>
                <p className="font-thin text-sm">Cloud Services</p>
              </div>
            </div>

            {/* <!-- Item-5 --> */}
            <div
              onClick={() => handleClick("management")}
              className="flex items-center justify-center px-8 hover:cursor-pointer"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/management&support - icon.png" alt="" />
                </div>
                <p className="font-thin text-sm">
                  Management & <br />
                  support
                </p>
              </div>
            </div>

            {/* <!-- Item-6 --> */}
            <div
              onClick={() => handleClick("saas")}
              className="flex items-center justify-center px-8 hover:cursor-pointer"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/saas-icon.png" alt="" />
                </div>
                <p className="font-thin text-sm">Solution as a service</p>
              </div>
            </div>
          </div>
          <hr className="hidden md:block md:mt-10" />
          <div className="mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-7">
            {/* <!-- Item-7 --> */}
            <div
              onClick={() => handleClick("dataProtection")}
              className="flex items-center justify-center px-8 hover:cursor-pointer"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img
                    src="../img/new/dataProtection.png"
                    className="w-24 bg-white rounded full"
                    alt=""
                  />
                </div>
                <p className="font-thin text-sm">Data Protection</p>
              </div>
            </div>
            {/* <!-- Item-8 --> */}
            <div
              onClick={() => handleClick("managedSecurity")}
              className="flex items-center justify-center px-8 hover:cursor-pointer"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/managed-security-icon.png" alt="" />
                </div>
                <p className="font-thin text-sm">Managed Security</p>
              </div>
            </div>
            {/* <!-- Item-9 --> */}
            <div
              onClick={() => handleClick("itEssentials")}
              className="flex items-center justify-center px-8 hover:cursor-pointer"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/it-essentials-icon.png" alt="" />
                </div>
                <p className="font-thin text-sm">IT Essentials</p>
              </div>
            </div>
            {/* <!-- Item-10 --> */}
            <div
              onClick={() => handleClick("storage")}
              className="flex items-center justify-center px-8 hover:cursor-pointer"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/storage-icon.png" alt="" />
                </div>
                <p className="font-thin text-sm">Storage</p>
              </div>
            </div>
            {/* <!-- Item-9 --> */}
            <div
              onClick={() => handleClick("collaboration")}
              className="flex items-center justify-center px-8 hover:cursor-pointer"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/collaboration-icon.png" alt="" />
                </div>
                <p className="font-thin text-sm">Collaboration</p>
              </div>
            </div>
          </div>

          {/* <!-- End of Services --> */}
        </div>
      </section>
      {isModalOpen.compute && <ServiceModal data={datas[0].details.services} />}
      {isModalOpen.security && (
        <ServiceModal data={datas[1].details.services} />
      )}
      {isModalOpen.iaas && <ServiceModal data={datas[2].details.services} />}
      {isModalOpen.cloudServices && (
        <ServiceModal data={datas[3].details.services} />
      )}
      {isModalOpen.Management && (
        <ServiceModal data={datas[4].details.services} />
      )}
      {isModalOpen.saas && <ServiceModal data={datas[5].details.services} />}
      {isModalOpen.dataProtection && (
        <ServiceModal data={datas[6].details.services} />
      )}
      {isModalOpen.managedSecurity && (
        <ServiceModal data={datas[7].details.services} />
      )}
      {isModalOpen.itEssentials && (
        <ServiceModal data={datas[8].details.services} />
      )}
      {isModalOpen.storage && <ServiceModal data={datas[9].details.services} />}
      {isModalOpen.collaboration && (
        <ServiceModal data={datas[10].details.services} />
      )}
    </>
  );
}
export default Services;
