type Description = {
  id: number;
  service: string;
  desc: string;
};

interface Details {
  services: string[];
  details: Description[];
}

export const solutionsData: Details = {
  services: ["Featured", "By Industry", "By Type"],
  details: [
    {
      id: 1,
      service: "Enterprise",
      desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
    },
    {
      id: 2,
      service: "Healthcare",
      desc: "Secured and controlled hosting environment with redundant power and internet connections, technical support, and on-site maintenance",
    },
    {
      id: 3,
      service: "Education",
      desc: "Secured and controlled hosting environment with redundant power and internet connections, technical support, and on-site maintenance",
    },
    {
      id: 4,
      service: "Financial",
      desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
    },
    {
      id: 5,
      service: "Manufacturing",
      desc: "Secured and controlled hosting environment with redundant power and internet connections, technical support, and on-site maintenance",
    },
  ],
};

export const ServicesData: Details = {
  services: [
    "Compute",
    "Security",
    "Infrastructure as a Service",
    "Cloud Service",
    "Management & Support",
    "Solution as a Service",
    "Data Protection",
    "Managed Security",
    "IT Essentials",
    "Storage",
    "Collaboration",
  ],
  details: [
    {
      id: 1,
      service: "Data Recovery as a Service",
      desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
    },
    {
      id: 2,
      service: "Backup & Replication",
      desc: "Secured and controlled hosting environment with redundant power and internet connections, technical support, and on-site maintenance",
    },
    {
      id: 3,
      service: "AWT DataVault",
      desc: "  Secured and controlled hosting environment with redundant power and internet connection, technical support, and on-site maintenance",
    },
    {
      id: 4,
      service: "Data Share",
      desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
    },
    {
      id: 5,
      service: "Office 365 Backup",
      desc: "Secured and controlled hosting environment with redundant power and internet connection, technical support, and on-site maintenance",
    },
    {
      id: 6,
      service: "Cloud-to-Cloud Backup",
      desc: "Secured and controlled hosting environment with redundantpower and internet connection, technical support, and on-site maintenance",
    },
  ],
};

module.exports = {
  solutionsData,
  ServicesData,
};
