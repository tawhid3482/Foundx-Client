"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";
import { protectedRoutes } from "@/src/constant";
const NavbarDropDown = () => {
  const route = useRouter();
  const handleNavigation = (pathName: string) => {
    route.push(pathName);
  };

  const { user, setIsLoading: userLoading } = useUser();
  const pathname = usePathname();
  const handleLogout = () => {
    logout();
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      route.push('/')
    }
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
            key="create-post"
            onClick={() => handleNavigation("/profile/create-post")}
          >
            Create-Post
          </DropdownItem>
          <DropdownItem
            key="about-duplicate"
            onClick={() => handleNavigation("/profile/claim-requests")}
          >
            Claims
          </DropdownItem>
          <DropdownItem key="logout" onClick={() => handleLogout()}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropDown;
