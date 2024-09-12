export interface ServiceLink {
    href: string;
    title: string;
    description: string;
  }
  
  export interface ServiceCategory {
    label: string;
    links: ServiceLink[];
  }
  