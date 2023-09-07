import { createProfile, getProfilesFromDb, ProfileData } from "@/lib/actions/profile-actions";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async (req:Request, res:Response) => {
    try {
        // Replace this with your actual data retrieval logic
        const profiles = await getProfilesFromDb();
    
        // Send the data as a JSON response
        return NextResponse.json({message: 'ok',profiles}, { status: 200});
      } catch (error) {
        return NextResponse.json({ Message:'An error occurred', error }, { status: 500});
      }
    }


    // export const POST = async (req:Request, res:Response) => {
    //     try {
    //         const { name, email, location, image } = req.body;

    //   // Validate the form data using validation libraries if necessary

    //   // Create a new profile record in the database
    //   const profile = await prisma.profile.create({
    //     data: {
    //       name,
    //       email,
    //       location,
    //       image,
    //     },
    //   });
    //       return NextResponse.json({message: 'ok',profile}, { status: 201});
    //     } catch (error) {
    //       console.log("An error occurred while creating the profile");
    //       return NextResponse.json({ error: "Internal server error" }, { status: 500});
    //     }
    // }

    
    // export const POST = async (req:Request, res:Response) => {
    //     try {
    //       const profileData: ProfileData = req.body!; // Assuming the request body contains the profile data
    
    //       const createdProfile = await createProfile(profileData);
          
    //       return NextResponse.json({message: 'ok',createdProfile}, { status: 201});
    //     } catch (error) {
    //       console.log("An error occurred while creating the profile");
    //       return NextResponse.json({ error: "Internal server error" }, { status: 500});
    //     }
    // }
