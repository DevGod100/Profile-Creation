import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ClientCareerGoals from "../prof-fields-clientside/ClientCareerGoals";


const prisma = new PrismaClient();

const CareerGoals = () => {
    async function theServerAction(data: FormData) {
        "use server";
        const session = await getServerSession();
        const careerGoals = data.get("careerGoals") as string;
    
        try {
          if (session && session.user?.email) {
            const email = session.user.email;
    
            await prisma.user.update({
              where: { email: email },
              data: {
                careergoals: careerGoals,
              },
            });
          }
          revalidatePath("/");
          console.log("carreerGoals updated successfully!");
        } catch (error) {
          console.error("Error updating carreerGoals:", error);
        }
      }
  return (
    <div>
      <form action={theServerAction}>
      <ClientCareerGoals />
      </form>
    </div>
  )
}

export default CareerGoals