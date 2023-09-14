import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ClientName from "../prof-fields-clientside/ClientName";
import ClientDevTypes from "../prof-fields-clientside/ClientDevTypes";
const prisma = new PrismaClient();

const DevTypes = () => {
  async function theServerAction(data: FormData) {
    "use server";
    const session = await getServerSession();
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
      <form action={theServerAction}><ClientDevTypes />
      </form>
    </div>
  );
};

export default DevTypes;