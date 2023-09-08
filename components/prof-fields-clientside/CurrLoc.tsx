"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Check } from "lucide-react";

const CurrLoc = () => {    
const [theLoc, setTheLoc] = useState<string | null>(null)


  return (
    <div className="flex p-2 m-2" >
      
    </div>
  );
  
  }

export default CurrLoc;
















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