export interface Service {
  id: number
  icon: string
  name: string
  desc: string
}

export interface ServicesType {
  id: number
  icon: string
  name: string
  details: {
    services: Service[]
  }
}

export type AllServices = ServicesType[]

export const datas: AllServices = [
  {
    id: 1,
    icon: '../img/new/compute.png',
    name: 'Compute',
    details: {
      services: [
        {
          id: 1.1,
          icon: '../icons/cloud-server-icon.png',
          name: 'Cloud Server',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 1.2,
          icon: '../icons/private-cloud-icon.png',
          name: 'Private Cloud',
          desc: 'Secured and controlled hosting environment with redundant power and internet connections, technical support and on site maintainance',
        },
      ],
    },
  },
  {
    id: 2,
    icon: '../img/new/security.png',
    name: 'Security',
    details: {
      services: [
        {
          id: 2.1,
          icon: '../icons/ssl-icon.png',
          name: 'SSL',
          desc: 'A cutting-edge encryption which uses both public and symmetric keys to safeguard your web browser',
        },
        {
          id: 2.2,
          icon: '../icons/end-point-icon.png',
          name: 'Endpoint Security',
          desc: 'Benefit from real-time monitoring and automatic updates for round-the-clock protection',
        },
        {
          id: 2.3,
          icon: '../icons/soar-icon.png',
          name: 'SOAR',
          desc: 'Unlock the full potential of your SecOps team by streaming incident response and automation with Cloud SOAR',
        },
        {
          id: 2.4,
          icon: '../icons/managed-soc-icon.png',
          name: 'Managed SOC Services',
          desc: 'Providing you an AI-based platforms using machine learning for real-time threat detection and response',
        },
        {
          id: 2.5,
          icon: '../icons/managed-soc-icon.png',
          name: 'Cloud Server',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
      ],
    },
  },
  {
    id: 3,
    icon: '../img/new/iaas-icon.png',
    name: 'Infrastructure as a Service',
    details: {
      services: [
        {
          id: 3.1,
          icon: '../icons/co-location-icon.png',
          name: 'Co-Location',
          desc: 'Secured and controlled hosting environment with redundant power and internet connections, technical support and on-site maintainance',
        },
        {
          id: 3.2,
          icon: '../icons/baremetal-server-icon.png',
          name: 'BareMetal Server',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
      ],
    },
  },
  {
    id: 4,
    icon: '../img/new/cloud-services-icon.png',
    name: 'Cloud Services',
    details: {
      services: [
        {
          id: 4.1,
          icon: '../icons/hosting-services-icon.png',
          name: 'Hosting Services',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 4.2,
          icon: '../icons/web-hosting-icon.png',
          name: 'Web Hosting',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 4.3,
          icon: '../icons/dns-icon.png',
          name: 'DNS Service',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 4.4,
          icon: '../icons/buy-domain-icon.png',
          name: 'Buy Domain',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 4.5,
          icon: '../icons/c-panel-icon.png',
          name: 'Managed cPannel',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
      ],
    },
  },
  {
    id: 5,
    icon: '../img/new/management&support - icon.png',
    name: 'Management & Support',
    details: {
      services: [
        {
          id: 5.1,
          icon: '../icons/ams-icon.png',
          name: 'Annual Maintenance Service',
          desc: 'Monitoring regular system updates, security patches, and performance optimization to keep the cloud environment running at optimal levels',
        },
        {
          id: 5.2,
          icon: '../icons/setup-configuration-icon.png',
          name: 'Setup and Configuration',
          desc: 'Expertly set up and configure your cloud servers for optimal performance and security',
        },
        {
          id: 5.3,
          icon: '../icons/it-support-icon.png',
          name: 'IT Support',
          desc: "Optimize your business with AWT's open IT Support service",
        },
        {
          id: 5.4,
          icon: '../icons/server-maintenance-icon.png',
          name: 'Server Maintenance',
          desc: 'Entrust us with your server-maintenance needs and let us take care of ensuring smooth and uninterupted server operations for your organization',
        },
      ],
    },
  },
  {
    id: 6,
    icon: '../img/new/saas-icon.png',
    name: 'Solution as a Service',
    details: {
      services: [
        {
          id: 6.1,
          icon: '../icons/goaml-icon.png',
          name: 'goAML',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
      ],
    },
  },
  {
    id: 7,
    icon: '../img/new/data-protection-icon.png',
    name: 'Data Protection',
    details: {
      services: [
        {
          id: 7.1,
          icon: '../icons/draas-icon.png',
          name: 'Data Recovery as a Service',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 7.2,
          icon: '../icons/backup-repli-icon.png',
          name: 'Backup & Replication',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 7.3,
          icon: '../icons/data-vault-icon.png',
          name: 'AWT DataVault',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 7.4,
          icon: '../icons/data-share-icon.png',
          name: 'Data Share',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 7.5,
          icon: '../icons/o365-icon.png',
          name: 'Office 365 Backup',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 7.6,
          icon: '../icons/cloud-to-cloud-icon.png',
          name: 'Cloud-to-Cloud Backup',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
      ],
    },
  },
  {
    id: 8,
    icon: '../img/new/managed-security-icon.png',
    name: 'Managed Security',
    details: {
      services: [
        {
          id: 8.1,
          icon: '../icons/firewall-icon.png',
          name: 'Firewall as a Service',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 8.2,
          icon: '../icons/siem-icon.png',
          name: 'SIEM as a Service',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 8.3,
          icon: '../icons/soc-icon.png',
          name: 'SOC as a Service',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 8.4,
          icon: '../icons/csa-icon.png',
          name: 'Cyber Security Assesment',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
      ],
    },
  },
  {
    id: 9,
    icon: '../img/new/it-essentials-icon.png',
    name: 'IT Essentials',
    details: {
      services: [
        {
          id: 9.1,
          icon: '../icons/moit-icon.png',
          name: 'Managed Office IT Essentials',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
      ],
    },
  },
  {
    id: 10,
    icon: '../img/new/storage-icon.png',
    name: 'Storage',
    details: {
      services: [
        {
          id: 10.1,
          icon: '../icons/file-storage-icon.png',
          name: 'File Storage',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
        {
          id: 10.2,
          icon: '../icons/s3-cloud-icon.png',
          name: 'S3 Cloud',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
      ],
    },
  },
  {
    id: 11,
    icon: '../img/new/collaboration-icon.png',
    name: 'Collaboration',
    details: {
      services: [
        {
          id: 11.1,
          icon: '../icons/biz-email-icon.png',
          name: 'Business Email',
          desc: 'Robust cloud architecture that delivers the perfect balance of speed and reliability',
        },
      ],
    },
  },
]
