import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import UploadIMG from "../cloudinary/UploadIMG";

const prisma = new PrismaClient();

const ProfileImage = () => {
  async function theServerAction(data: FormData) {
    "use server";
    const session = await getServerSession();
    const uploadedImage = data.get("uploadedImage") as string;
    console.log(uploadedImage);

    try {
      if (session && session.user?.email) {
        const email = session.user.email;

        await prisma.user.update({
          where: { email: email },
          data: {
            profimage: uploadedImage,
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
    <div >
      <form action={theServerAction}>
        <UploadIMG />
      </form>    
    </div>
  );
};

export default ProfileImage;