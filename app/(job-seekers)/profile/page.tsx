import ClientDevTypes from "@/components/prof-fields-clientside/ClientDevTypes";
import CurrentLocation from "@/components/profile-fields/CurrentLocation";
import ProfileImage from "@/components/profile-fields/ProfileImage";
import ProfileName from "@/components/profile-fields/ProfileName";
import { Separator } from "@/components/ui/separator";
import React from "react";

const profile = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bo">
      <div className="flex flex-col m-2 p-2 border border-gray-5 rounded-md">
        <ProfileImage />
          <Separator className="mt-5 "/>
        <ProfileName />
        <CurrentLocation />
      </div>
      <ClientDevTypes />
    </div>
  );
};

export default profile;
