import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ClientLinkedInUrl from "../prof-fields-clientside/ClientLinkedInUrl";

const prisma = new PrismaClient();

const LinkedinUrl = () => {
  async function theServerAction(data: FormData) {
    "use server";
    const session = await getServerSession();
    const linkedinUrl = data.get("linkedinUrl") as string;

    try {
      if (session && session.user?.email) {
        const email = session.user.email;

        await prisma.user.update({
          where: { email: email },
          data: {
            linkedinurl: linkedinUrl,
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
        <ClientLinkedInUrl />
      </form>
    </div>
  );
};

export default LinkedinUrl;
