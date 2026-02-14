export interface MenuSubItem {
  id: string;
  label: string;
  href: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  href?: string;
  items: MenuSubItem[];
  group?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  categories?: MenuCategory[];
  sections?: MenuCategory[];
}

export interface MenuData {
  mainMenu: MenuItem[];
}
