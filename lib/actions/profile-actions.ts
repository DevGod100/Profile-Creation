"use server";

import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function GetFullProfile() {
  const session = await getServerSession();

  try {
    if (session && session.user?.email) {
      const email = session.user.email;

      const retrievedUser = await prisma.user.findUnique({
        where: { email: email },
        select: {
          profimage: true,
          profname: true,
          currentlocation: true,
        },
      });
      return retrievedUser; // Return the user data
    }
    revalidatePath("/");
    console.log("Retrieved all fields Succesfully successfully!");
  } catch (error) {
    console.error("Error retrieving fields:", error);
  }
}

export async function GetProfName() {
  const session = await getServerSession();

  try {
    if (session && session.user?.email) {
      const email = session.user.email;

      const retrievedField = await prisma.user.findUnique({
        where: { email: email },
        select: {
          profname: true,
        },
      });
      return retrievedField; // Return the user data
    }
    revalidatePath("/");
    console.log("Retrieved field Succesfully successfully!");
  } catch (error) {
    console.error("Error retrieving field:", error);
  }
}

// export async function getUserLoc() {
// const session = await getServerSession();

// if (session && session.user?.email) {
//     const email = session.user.email; // Access the email from session.user

//     const existingData = await prisma.user.findUnique({
//         where: {
//             email: email,
//           },
//           select: {
//               currentlocation: true,
//          },
//     });
//     return existingData || 'Current Location...'; // Return existingData or an empty object if it's null
//   }
//   return 'No Session error lib/actions'; // Return an empty object if there's no session or email
// }

// // Implement your data retrieval logic using Prisma
// export async function getProfilesFromDb() {
//     const profiles = await prisma.profile.findMany(); // Fetch profiles from the database
//     return profiles;
//   }

//   export type ProfileData = {
//     name: string;
//     email: string;
//     location: string;
//     image: string;
//   };

//   export async function createProfile(profileData: ProfileData) {
//     const createdProfile = await prisma.profile.create({
//       data: profileData,
//     });

//     return createdProfile;
//   }