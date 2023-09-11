import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import ClientCurrLoc from "../prof-fields-clientside/ClientCurrLoc";

const prisma = new PrismaClient();


const CurrentLocation = () => {


  async function theServerAction(data: FormData) {
    "use server";
    const session = await getServerSession();
    const currentLocation = data.get("currentLocation") as string;


    try {
      if (session && session.user?.email) {
          const email = session.user.email;
      
          await prisma.user.update({
            where: { email: email },
            data: {
              currentlocation: currentLocation,
            }
          }); 
      }
      revalidatePath("/");
      console.log("Profile name updated successfully!");
    } catch (error) {
      console.error("Error updating profile name:", error);
    }
  }
  return (
    <div>
      <form action={theServerAction}>
        <ClientCurrLoc />
      </form>
    </div>
  );
};

export default CurrentLocation;




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
