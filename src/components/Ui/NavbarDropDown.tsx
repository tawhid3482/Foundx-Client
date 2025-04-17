"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
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
          <DropdownItem
            key="about"
            onClick={() => handleNavigation("/profile")}
          >
            Profile
          </DropdownItem>
          <DropdownItem
            key="about"
            onClick={() => handleNavigation("/profile/about")}
          >
            About
          </DropdownItem>
          <DropdownItem
            onClick={() => handleNavigation("/profile/create-post")}
            key="create-post"
          >
            Create-Post
          </DropdownItem>
          <DropdownItem
            onClick={() => handleNavigation("/profile/claim-requests")}
            key="about-duplicate"
          >
            Claims
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropDown;
