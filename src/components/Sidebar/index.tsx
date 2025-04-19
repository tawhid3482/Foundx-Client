"use client";
import Link from "next/link";
import { SidebarOptions } from "./SidebarOptions";
import { adminLinks, userLinks } from "./constants";
import { useUser } from "@/src/context/user.provider";
import { Button } from "@heroui/button";
import Loading from "../Ui/Loading";
import Image from "next/image";

const Sidebar = () => {
  const { user, isLoading } = useUser();

  return (
    <div>
      <div className="rounded-xl bg-default-100 p-2">
        <div className="h-[330px] w-full rounded-md">
          <Image
            alt="profile"
            height={100}
            src={user?.profilePhoto as string}
            width={100}
          />
        </div>
        <div className="my-3">
          <h1 className="text-2xl font-semibold">{user?.name}</h1>
          <p className="break-words text-sm">{user?.email}</p>
        </div>
        <Button
          as={Link}
          className="mt-2 w-full rounded-md"
          href={"/profile/create-post"}
        >
          Create a post
        </Button>
      </div>
      <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2">
        {isLoading ? (
          <Loading />
        ) : (
          <SidebarOptions
            links={user?.role === "USER" ? userLinks : adminLinks}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
