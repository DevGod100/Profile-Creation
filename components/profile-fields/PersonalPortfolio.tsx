import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ClientPersonalPortfolio from "../prof-fields-clientside/ClientPersonalPortfolio";

const prisma = new PrismaClient();

const PersonalPortfolio = () => {
  async function theServerAction(data: FormData) {
    "use server";
    const session = await getServerSession();
    const personalPortfolio = data.get("personalPortfolio") as string;

    try {
      if (session && session.user?.email) {
        const email = session.user.email;

        await prisma.user.update({
          where: { email: email },
          data: {
            personalportfolio: personalPortfolio,
          },
        });
      }
      revalidatePath("/");
      console.log("field updated successfully!");
    } catch (error) {
      console.error("Error updating field:", error);
    }
  }
  return (
    <div>
      <form action={theServerAction}>
        <ClientPersonalPortfolio />
      </form>
    </div>
  );
};

export default PersonalPortfolio;
