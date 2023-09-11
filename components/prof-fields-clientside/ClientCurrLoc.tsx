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
      <div className="flex p-2 m-2">
        <Label className="font-semibold align-end">Current Location</Label>
        <Input
          type="text"
          name="currentLocation"
          value={oldField || ""}
          placeholder='Current Location'
          required
          onChange={(e) => setOldField(e.target.value)}
        />
        <Button type="submit">
          <Check size={20} strokeWidth={2} />
        </Button>
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