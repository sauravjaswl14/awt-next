interface Service {
  id: number;
  icon: string;
  name: string;
  desc: string;
}

interface ServicesType {
  id: number;
  icon: string;
  name: string;
  details: {
    services: Service[];
  };
}

type Services = ServicesType[];

const data: Services = [
  {
    id: 1,
    icon: "../img/new/compute.png",
    name: "Compute",
    details: {
      services: [
        {
          id: 1.1,
          icon: "./img/icons/cloud-server-icon.png",
          name: "Cloud Server",
          desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
        },
        {
          id: 1.2,
          icon: "",
          name: "Private Cloud",
          desc: "Secured and controlled hosting environment with redundant power and internet connections, technical support and on site maintainance",
        },
      ],
    },
  },
  {
    id: 2,
    icon: "",
    name: "Security",
    details: {
      services: [
        {
          id: 2.1,
          icon: "",
          name: "SSL",
          desc: "A cutting-edge encryption which uses both public and symmetric keys to safeguard your web browser",
        },
        {
          id: 2.2,
          icon: "",
          name: "Endpoint Security",
          desc: "Benefit from real-time monitoring and automatic updates for round-the-clock protection",
        },
        {
          id: 2.3,
          icon: "",
          name: "SOAR",
          desc: "Unlock the full potential of your SecOps team by streaming incident response and automation with Cloud SOAR",
        },
        {
          id: 2.4,
          icon: "",
          name: "Managed SOC Services",
          desc: "Providing you an AI-based platforms using machine learning for real-time threat detection and response",
        },
        {
          id: 2.5,
          icon: "",
          name: "Cloud Server",
          desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
        },
      ],
    },
  },
  {
    id: 3,
    icon: "",
    name: "Infrastructure as a Service",
    details: {
      services: [
        {
          id: 3.1,
          icon: "",
          name: "Co-Location",
          desc: "Secured and controlled hosting environment with redundant power and internet connections, technical support and on-site maintainance",
        },
        {
          id: 3.2,
          icon: "",
          name: "BareMetal Server",
          desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
        },
      ],
    },
  },
  {
    id: 4,
    icon: "",
    name: "Cloud Services",
    details: {
      services: [
        {
          id: 4.1,
          icon: "",
          name: "Hosting Services",
          desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
        },
        {
          id: 4.2,
          icon: "",
          name: "Web Hosting",
          desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
        },
        {
          id: 4.3,
          icon: "",
          name: "DNS Service",
          desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
        },
        {
          id: 4.4,
          icon: "",
          name: "Buy Domain",
          desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
        },
        {
          id: 4.5,
          icon: "",
          name: "Managed cPannel",
          desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
        },
      ],
    },
  },
  {
    id: 5,
    icon: "",
    name: "Management & Support",
    details: {
      services: [
        {
          id: 5.1,
          icon: "",
          name: "Annual Maintenance Service",
          desc: "Monitoring regular system updates, security patches, and performance optimization to keep the cloud environment running at optimal levels",
        },
        {
          id: 5.2,
          icon: "",
          name: "Setup and Configuration",
          desc: "Expertly set up and configure your cloud servers for optimal performance and security",
        },
        {
          id: 5.3,
          icon: "",
          name: "IT Support",
          desc: "Optimize your business with AWT's open IT Support service",
        },
        {
          id: 5.4,
          icon: "",
          name: "Server Maintenance",
          desc: "Entrust us with your server-maintenance needs and let us take care of ensuring smooth and uninterupted server operations for your organization",
        },
      ],
    },
  },
  {
    id: 6,
    icon: "",
    name: "Solution as a Service",
    details: {
      services: [
        {
          id: 6.1,
          icon: "",
          name: "goAML",
          desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
        },
      ],
    },
  },
  {
    id: 7,
    icon: "",
    name: "Data Protection",
    details: {
      services: [
        {
          id: 7.1,
          icon: "",
          name: "",
          desc: "",
        },
      ],
    },
  },
  {
    id: 8,
    icon: "",
    name: "Managed Security",
    details: {
      services: [
        {
          id: 8.1,
          icon: "",
          name: "",
          desc: "",
        },
      ],
    },
  },
  {
    id: 9,
    icon: "IT Essentials",
    name: "",
    details: {
      services: [
        {
          id: 9.1,
          icon: "",
          name: "",
          desc: "",
        },
      ],
    },
  },
  {
    id: 10,
    icon: "",
    name: "Storage",
    details: {
      services: [
        {
          id: 10.1,
          icon: "",
          name: "",
          desc: "",
        },
      ],
    },
  },
  {
    id: 11,
    icon: "",
    name: "Collaboration",
    details: {
      services: [
        {
          id: 11.1,
          icon: "",
          name: "",
          desc: "",
        },
      ],
    },
  },
];

// function service(props: ServiceProps) {
//   const { icon, name, desc } = props;
//   return (
//     <div className="flex items-center justify-center px-8 hover:cursor-pointer">
//       <div className="flex flex-col space-y-4">
//         <div>
//           {/* <!-- svg --> */}
//           <img src="" alt="" />
//         </div>
//         {/* <p className="font-thin text-sm">Cloud Services</p> */}
//       </div>
//     </div>
//   );
// }
// export default service;
