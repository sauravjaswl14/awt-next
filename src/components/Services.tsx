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

  let [activeService, setActiveService] = useState<string>("");

  function handleClick(service: string) {
    switch (service) {
      case "compute":
        setActiveService("compute");
        //document.getElementById("compute")!.classList.toggle("border-b-4");
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
        //document.getElementById("security")!.classList.toggle("border-b-4");
        //document.getElementById("compute")!.classList.toggle("border-b-4");
        setActiveService("security");
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
        // document.getElementById("iaas")!.classList.toggle("border-b-4");
        setActiveService("iaas");
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
        setActiveService("cloudServices");
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
        setActiveService("management");
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
        setActiveService("saas");

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
        setActiveService("dataProtection");

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
        setActiveService("managedSecurity");
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
        setActiveService("itEssentials");
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
        setActiveService("storage");
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
        setActiveService("collaboration");

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
              id="compute"
              onClick={() => handleClick("compute")}
              className={`flex items-center justify-center px-8 hover:cursor-pointer border-[#0000cc] ${
                activeService == "compute" ? "border-b-4 p-4" : ""
              } `}
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
              id="security"
              onClick={() => handleClick("security")}
              className={`flex items-center justify-center px-8 hover:cursor-pointer border-[#0000cc] ${
                activeService == "security" ? "border-b-4 p-4" : ""
              } `}
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
              id="iaas"
              onClick={() => handleClick("iaas")}
              className={`flex items-center justify-center px-8 hover:cursor-pointer border-[#0000cc] ${
                activeService === "iaas" ? "border-b-4 p-4" : ""
              }`}
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
              id="cloudServices"
              onClick={() => handleClick("cloudServices")}
              className={`flex items-center justify-center px-8 hover:cursor-pointer border-[#0000cc] ${
                activeService === "cloudServices" ? "border-b-4 p-4" : ""
              }`}
            >
              <div className="flex flex-col space-y-4 ">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/cloud-services-icon.png" alt="" />
                </div>
                <p className="font-thin text-sm">Cloud Services</p>
              </div>
            </div>

            {/* <!-- Item-5 --> */}
            <div
              id="management"
              onClick={() => handleClick("management")}
              className={`flex items-center justify-center px-8 hover:cursor-pointer border-[#0000cc] ${
                activeService === "management" ? "border-b-4 p-4" : ""
              }`}
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/management&support - icon.png" alt="" />
                </div>
                <p className="font-thin text-sm text-center">
                  Management & support
                </p>
              </div>
            </div>

            {/* <!-- Item-6 --> */}
            <div
              id="saas"
              onClick={() => handleClick("saas")}
              className={`flex items-center justify-center px-8 hover:cursor-pointer border-[#0000cc] ${
                activeService === "saas" ? "border-b-4 p-4" : ""
              }`}
            >
              <div className="flex flex-col space-y-4 items-center justify-center">
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
              id="dataProtection"
              onClick={() => handleClick("dataProtection")}
              className={`flex items-center justify-center px-8 hover:cursor-pointer border-[#0000cc] ${
                activeService === "dataProtection" ? "border-b-4 p-4" : ""
              }`}
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
              id="managedSecurity"
              onClick={() => handleClick("managedSecurity")}
              className={`flex items-center justify-center px-8 hover:cursor-pointer border-[#0000cc] ${
                activeService === "managedSecurity" ? "border-b-4 p-4" : ""
              }`}
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/managed-security-icon.png" alt="" />
                </div>
                <p className="font-thin text-sm text-center">
                  Managed Security
                </p>
              </div>
            </div>
            {/* <!-- Item-9 --> */}
            <div
              id="itEssentials"
              onClick={() => handleClick("itEssentials")}
              className={`flex items-center justify-center px-8 hover:cursor-pointer border-[#0000cc] ${
                activeService === "itEssentials" ? "border-b-4 p-4" : ""
              }`}
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
              id="storage"
              onClick={() => handleClick("storage")}
              className={`flex items-center justify-center px-8 hover:cursor-pointer border-[#0000cc] ${
                activeService === "storage" ? "border-b-4 p-4" : ""
              }`}
            >
              <div className="flex flex-col space-y-4 items-center justify-center">
                <div>
                  {/* <!-- svg --> */}
                  <img src="../img/new/storage-icon.png" alt="" />
                </div>
                <p className="font-thin text-sm">Storage</p>
              </div>
            </div>
            {/* <!-- Item-9 --> */}
            <div
              id="collaboration"
              onClick={() => handleClick("collaboration")}
              className={`flex items-center justify-center px-8 hover:cursor-pointer border-[#0000cc] ${
                activeService === "collaboration" ? "border-b-4 p-4" : ""
              }`}
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
