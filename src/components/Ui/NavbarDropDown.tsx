"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";
import { useRouter } from "next/navigation";
const NavbarDropDown = () => {
  const route = useRouter();
  const handleNavigation = (pathName: string) => {
    route.push(pathName);
  };
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className="cursor-pointer" name="Saikat" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="about" onClick={() => handleNavigation("/profile/about")}>
            About
          </DropdownItem>
          <DropdownItem key="create-post">Create-Post</DropdownItem>
          <DropdownItem key="about-duplicate">About</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropDown;
