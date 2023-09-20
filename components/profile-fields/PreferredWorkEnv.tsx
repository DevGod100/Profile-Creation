import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ClientDevTypes from '../prof-fields-clientside/ClientDevTypes'
import ClientPreferredWorkEnv from "../prof-fields-clientside/ClientPreferredWorkEnv";

const prisma = new PrismaClient();

const PreferredWorkEnv = () => {
    async function theServerAction(data: FormData) {
        "use server";
        const session = await getServerSession();
        const prefworkEnv = data.get("prefworkEnv") as string;
    
        try {
          if (session && session.user?.email) {
            const email = session.user.email;
    
            await prisma.user.update({
              where: { email: email },
              data: {
                prefworkenv: prefworkEnv,
              },
            });
          }
          revalidatePath("/");
          console.log("Preffered work env updated successfully!");
        } catch (error) {
          console.error("Error updating Preffered work env:", error);
        }
      }
  return (
    <div>
      <form action={theServerAction}>
      <ClientPreferredWorkEnv />
      </form>
    </div>
  )
}

export default PreferredWorkEnv