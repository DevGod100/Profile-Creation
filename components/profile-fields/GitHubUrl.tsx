import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ClientGitHubUrl from "../prof-fields-clientside/ClientGitHubUrl";


const prisma = new PrismaClient();

const GitHubUrl = () => {
  async function theServerAction(data: FormData) {
    "use server";
    const session = await getServerSession();
    const githubUrl = data.get("githubUrl") as string;

    try {
      if (session && session.user?.email) {
        const email = session.user.email;

        await prisma.user.update({
          where: { email: email },
          data: {
            githuburl: githubUrl,
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
        <ClientGitHubUrl />
      </form>
    </div>
  );
};

export default GitHubUrl;
