"use client"
import { useState, useEffect } from "react";
import { GetFullProfile } from "@/lib/actions/profile-actions";
import Image from "next/image";

const FullProfile = () => {
    const [fullProfile, setFullProfile] = useState<{
        profimage: string | null;
        profname: string | null;
        currentlocation: string | null;
      } | null>(null);
  
    useEffect(() => {
      async function fetchData() {
        const data = await GetFullProfile();
        setFullProfile(data);
      }
  
      fetchData();
    }, []);
  
    return (
      <div>
        {fullProfile ? (
          <div>
          <>
            {/* <EditBasic /> */}
            </>
            <p>Profile Image: </p>
            <Image
              className="rounded-full object-cover h-[40px] w-[40px]"
              width={35}
              height={35}
              src={`http://res.cloudinary.com/uploaded-profile-images/image/upload/v1693526415/${fullProfile.profimage}`}
              alt="- Profile Image -"
              />
            <p>Profile Name: {fullProfile.profname}</p>
            <p>Current Location: {fullProfile.currentlocation}</p>
            {/* Add more fields as needed */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default FullProfile;




// let existingData = await prisma.user.findUnique({
//   where: {
//       email: email,
//     },
//     select: {
//         currentlocation: true,
//     }, 
// })
// return existingData || 'Current Location...'; 








// if (session && session.user?.email) {
//   const email = session.user.email; // Access the email from session.user

//   const existingData = await prisma.user.findUnique({
//       where: {
//           email: email,
//         },
//         select: {
//             currentlocation: true,
//        },
//   });
