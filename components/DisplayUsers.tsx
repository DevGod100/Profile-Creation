import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { Separator } from "./ui/separator";
const prisma = new PrismaClient();

export default async function NextServerProfileForm() {

    const allUsers = await prisma.user.findMany({});

  return (
    <div>
      <div className="flex flex-col ">
        {allUsers && allUsers.map((user) => (
          <div key={user.id} className="my-2 rounded-md bg-gray-50 border border-gray-500 p-2">
            <div className="flex justify-between">
              <Image
                src={user.image || ''}
                alt={user.name || ''}
                width={35}
                height={35}
                className="object-contain"
              />
              <div className="flex flex-col">
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>

            </div>
          <Separator className="my-4" />
            <div>
              <h1>User Uploaded fields:</h1>
              <p>{user.profname}</p> 
              <div>
              <Image
              className="rounded-full object-cover  h-[40px] w-[40px]"
              width={35}
              height={35}
              src={`http://res.cloudinary.com/uploaded-profile-images/image/upload/v1693526415/${user.profimage}`}
              alt="- Profile Image -"
              />
              </div>
              
            </div>
          </div>
        ))}
      </div>
      <pre>{JSON.stringify(allUsers, null, 2)}</pre>

    </div>
  );
}








// const theId = session?.user.id

// await prisma.user.findUnique({
//   where: { id: theId },
// })


//ts bs
// let userProfile = null;

//   if (session) {
//     const userEmail = session.user.email;
//     // Query the profile based on the user's email
//     userProfile = await prisma.user.findUnique({
//         where: {
//           profemail: userEmail,
//         },
//       });
//     }