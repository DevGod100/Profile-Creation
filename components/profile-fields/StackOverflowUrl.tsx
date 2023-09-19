import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ClientStackOverflowUrl from "../prof-fields-clientside/ClientStackOverflowUrl";

const prisma = new PrismaClient();

const StackOverflowUrl = () => {
  async function theServerAction(data: FormData) {
    "use server";
    const session = await getServerSession();
    const stackoverflowUrl = data.get("stackoverflowUrl") as string;

    try {
      if (session && session.user?.email) {
        const email = session.user.email;

        await prisma.user.update({
          where: { email: email },
          data: {
            stackoverflowurl: stackoverflowUrl,
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
        <ClientStackOverflowUrl />
      </form>
    </div>
  );
};

export default StackOverflowUrl;
