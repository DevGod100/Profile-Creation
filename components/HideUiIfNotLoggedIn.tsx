import { getAuthSession } from "@/lib/nextauth";
import SignInButton from "./SignInButton";

const HideUiIfNotLoggedIn = async () => {
  const session = await getAuthSession();

  return (
    <>
      {!session && (
        <div className="backdrop-blur-sm bg-white/30 fixed h-screen w-full z-10">
          <div className="fixed Center-This backdrop-blur-lg bg-white/60 py-16 rounded-lg px-24 border  shadow-md">
            <SignInButton className="scale-150 px-5" text={"Sign In"} />
          </div>
        </div>
      )}
    </>
  );
};

export default HideUiIfNotLoggedIn;
