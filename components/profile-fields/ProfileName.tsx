import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Check } from "lucide-react";
import ClientName from "../prof-fields-clientside/ClientName";
const prisma = new PrismaClient();

const ProfileName = () => {
    let retrievedField = 'nigga';

   async function theServerAction(data: FormData) {
    "use server";

    const session = await getServerSession();

    try {
      if (session && session.user?.email) {
        const email = session.user.email;

        const retrievedUser = await prisma.user.findUnique({
          where: { email: email },
          select: {
            profname: true,
          },
        });
        retrievedField = retrievedUser?.profname || "";
      }
      revalidatePath("/");
      console.log("Retrieved all fields Succesfully successfully!");
    } catch (error) {
      console.error("Error retrieving fields:", error);
    }

    const profileName = data.get("profileName") as string;
    try {
      if (session && session.user?.email) {
        const email = session.user.email;

        await prisma.user.update({
          where: { email: email },
          data: {
            profname: profileName,
          },
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
      <form action={theServerAction} className="flex p-2 m-2">
       <ClientName />
      </form>
    </div>
  );
};

export default ProfileName;

// const ProfileName = () => {
//     async function theServerAction(data: FormData) {
//         "use server";
//         const session = await getServerSession();
//         const profileName = data.get("profileName") as string;
//         try {
//             if (session && session.user?.email) {
//                 const email = session.user.email;

//                 await prisma.user.update({
//                     where: { email: email },
//                     data: {
//                         profname: profileName,
//                     },
//                 });
//             }
//             revalidatePath('/')
//             console.log('Profile name updated successfully!');
//         } catch (error) {
//             console.error('Error updating profile name:', error);
//         }

//     }
//     return (
//         <div>
//             <form action={theServerAction} className="flex p-2 m-2">
//                 <Input
//                     type="text"
//                     placeholder='Current Name'
//                     required
//                     name="profileName"
//                 />
//                 <Button type="submit">
//                    <Check size={20} strokeWidth={2}  />
//                 </Button>
//             </form>
//         </div>
//     );
// };

// export default ProfileName;
