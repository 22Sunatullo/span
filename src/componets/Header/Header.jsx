import React from "react";
import { Button } from "../button/Button";
import { NavItem } from "../Nav-Item/Nav-Item";
import { NavMenu } from "../NavMenu/NavMenu";
import { FETURES } from "./constats";

export const Header = () => {
  return (
    <header className="flex items-center">
      <h1 className="text-4xl">Snap</h1>
      <nav className="hidden xl:flex space-x-6 ml-8 items-center">
        <NavItem text="future">
            <NavMenu items={FETURES}/>
        </NavItem>
        <NavItem text="Company"/>
        <NavItem text="Carers"/>
        <NavItem text="About"/>
      </nav>
      <div className="hidden ml-auto xl:flex space-x-5">
        <Button>Log In</Button>
        <Button hasBorder={true}>Log In</Button>
      </div>
      <div className="flex xl:hidden cursor-pointer">
        <span>----</span>
      </div>
    </header>
  );
};
