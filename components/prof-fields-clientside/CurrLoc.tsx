"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Check } from "lucide-react";
import { getUserLoc } from "@/lib/actions/profile-actions";

const CurrLoc = () => {    
const [theLoc, setTheLoc] = useState<string | null>(null)


// useEffect(() => {
//   async function fetchData() {
//     const data = await getUserLoc();
//     if (typeof data === "string") {
//       // Handle the case where data is a string (e.g., "Current Location..." or error message)
//       setTheLoc(data);
//     } else if (data !== null && typeof data.currentlocation === "string") {
//       // Handle the case where data is an object with a currentlocation property
//       setTheLoc(data.currentlocation);
//     } else {
//       // Handle any other unexpected cases or set a default value
//       setTheLoc("Default Location");
//     }
//   }

//   fetchData();
// }, []);


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