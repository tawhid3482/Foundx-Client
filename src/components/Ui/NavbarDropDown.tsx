"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { useRouter } from "next/navigation";
import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";
const NavbarDropDown = () => {
  const route = useRouter();
  const handleNavigation = (pathName: string) => {
    route.push(pathName);
  };

  const {user, setIsLoading: userLoading } = useUser();
  const handleLogout = () => {
    logout();
    userLoading(true);
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className="cursor-pointer" src={user?.profilePhoto} />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="profile"
            onClick={() => handleNavigation("/profile")}
          >
            Profile
          </DropdownItem>
          <DropdownItem
            key="profile-about"
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
          <DropdownItem onClick={() => handleLogout()} key="logout">
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropDown;
