"use client";

import { GetPercentageOfProfile } from "@/lib/actions/profile-actions";
import { useEffect, useState } from "react";

const ProfileStats = () => {
  const user = GetPercentageOfProfile();
  const [percentProfile, setpercentProfile] = useState<{
    profimage: string | null;
    profname: string | null;
    currentlocation: string | null;
    devtype: string | null;
    availability: string | null;
    linkedinurl: string | null;
    githuburl: string | null;
    stackoverflowurl: string | null;
  } | null>(null);
  console.log(user);

  useEffect(() => {
    async function fetchData() {
      const data = await GetPercentageOfProfile();
      setpercentProfile(data);
    }
    fetchData();
  }, []);

  // Calculate the percentage of non-null fields out of the total fields
  const calculatePercentage = (data) => {
    if (!data) return 0; // Handle the case where data is null or undefined
    const totalFields = Object.keys(data).length;
    const nonNullFields = Object.values(data).filter(
      (value) => value !== null
    ).length;
    const percentage = (nonNullFields / totalFields) * 100;
    return Math.round(percentage);
  };

  const calculateEmptyFields = (data) => {
    if (!data) return 0;
    const totalFields = Object.keys(data).length;
    const nonNullFields = Object.values(data).filter(
      (value) => value !== null
    ).length;
    return totalFields - nonNullFields;
  };

  const percentage = calculatePercentage(percentProfile);
  const emptyFields = calculateEmptyFields(percentProfile);


  return (
    <div className="stats shadow">
      <div className="stat bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="stat-value text-white">
          {percentage}%{` `}
          <span className="stat-title text-gray-200">complete</span>
        </div>
        <div className="stat-title text-gray-200">{emptyFields} tasks remaining...</div>
      </div>
    </div>
  );
};

export default ProfileStats;
