import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ClientAvailability from "../prof-fields-clientside/ClientAvailability";

const prisma = new PrismaClient();

const Availability = () => {
    async function theServerAction(data: FormData) {
        "use server";
        const session = await getServerSession();
        const Availability = data.get("Availability") as string;
    
        try {
          if (session && session.user?.email) {
            const email = session.user.email;
    
            await prisma.user.update({
              where: { email: email },
              data: {
                availability: Availability,
              },
            });
          }
          revalidatePath("/");
          console.log("Availability updated successfully!");
        } catch (error) {
          console.error("Error updating Availability:", error);
        }
      }
  return (
    <div>
      <form action={theServerAction}>
      <ClientAvailability />
      </form>
    </div>
  )
}

export default Availability