export interface MenuSubItem {
  id: string;
  label: string;
  href: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuSubItem[];
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  categories?: MenuCategory[];
}

export interface MenuData {
  mainMenu: MenuItem[];
}
