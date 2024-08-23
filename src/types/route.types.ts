import { ReactNode } from "react";

export type TSidebarItems = {
  key: string;
  label: ReactNode;
  children?: TSidebarItems[];
};

export type TLink = {
  name: string;
  path?: string;
  element?: ReactNode;
};

export interface TNav extends TLink {
  children?: TLink[];
}
