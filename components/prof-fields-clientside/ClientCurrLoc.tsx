"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Check } from "lucide-react";
import { GetCurrLoc } from "@/lib/actions/profile-actions";
import { Label } from "../ui/label";

const ClientCurrLoc = () => {
  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await GetCurrLoc();
      setOldField(data?.currentlocation || "");
    }

    fetchData();
  }, []);

  return (
    <div className="p-2 m-2 ">
      <div className="flex flex-col">
        <Label className="text-gray-500  py-2 ">Current Location</Label>
        <div className="flex">
          <Input
            type="text"
            name="currentLocation"
            value={oldField || ""}
            placeholder="Current Location"
            required
            onChange={(e) => setOldField(e.target.value)}
          />

          <Button type="submit" className="self-center">
            <Check size={20} strokeWidth={2} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClientCurrLoc;

// const [theLoc, setTheLoc] = useState(existingData?.currentlocation || 'Current Location');

// useEffect(() => {
//   if (existingData && existingData.currentlocation) {
//     setTheLoc(existingData.currentlocation);
//   }
// }, [existingData]);

// <Input
// type="text"
// placeholder={existingData !== null ? existingData : "Current Location"}
// required
// name="currentLocation"
// />
// <Button type="submit">
// <Check size={20} strokeWidth={2}  />
// </Button>