import { ReactNode } from "react";
import { Menu } from "./components/menu";

type AttacksLayoutProps = {
  children: ReactNode;
};

export default function AttacksLayout({ children }: AttacksLayoutProps) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
