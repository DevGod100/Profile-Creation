import { getAuthSession } from "@/lib/nextauth";



const HideUiIfNotLoggedIn = async () => {
  const session = await getAuthSession();

  return (
    <>
    {!session && 
    <div className="bg-pink-700 absolute h-[500%] w-full z-10">PLEASE SIGN IN</div>}
    </>
  )
};

export default HideUiIfNotLoggedIn;
