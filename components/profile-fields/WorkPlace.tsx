import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ClientCareerGoals from "../prof-fields-clientside/ClientCareerGoals";
import ClientWorkPlace from "../prof-fields-clientside/ClientWorkPlace";


const prisma = new PrismaClient();

const WorkPlace = () => {
    async function theServerAction(data: FormData) {
        "use server";
        const session = await getServerSession();
        const workPlace = data.get("workPlace") as string;
    
        try {
          if (session && session.user?.email) {
            const email = session.user.email;
    
            await prisma.user.update({
              where: { email: email },
              data: {
                workplace: workPlace,
              },
            });
          }
          revalidatePath("/");
          console.log("workPlace updated successfully!");
        } catch (error) {
          console.error("Error updating workPlace:", error);
        }
      }
  return (
    <div>
      <form action={theServerAction}>
      <ClientWorkPlace />
      </form>
    </div>
  )
}

export default WorkPlace