import FullProfile from "@/components/full-profile/FullProfile";
import CurrentLocation from "@/components/profile-fields/CurrentLocation";
import ProfileImage from "@/components/profile-fields/ProfileImage";
import ProfileName from "@/components/profile-fields/ProfileName";
import React from "react";

const profile = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex flex-col m-2 p-2 border border-gray-5 rounded-md">
      <ProfileImage />
      <ProfileName />
      <CurrentLocation />
    </div>
    <FullProfile />

    </div>
  );
};

export default profile;
