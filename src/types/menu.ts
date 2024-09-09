export interface LinkProps {
  href: string;
  title: string;
  description: string;
}

export interface MenuItemProps {
  label: string;
  links: LinkProps[];
}
