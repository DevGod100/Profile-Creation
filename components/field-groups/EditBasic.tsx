import { Separator } from "@/components/ui/separator";
import ProfileImage from "../profile-fields/ProfileImage";
import ProfileName from "../profile-fields/ProfileName";
import CurrentLocation from "../profile-fields/CurrentLocation";

const EditBasic = () => {
  return (
    <div className="flex min-h-max flex-col items-center justify-between p-24">
      <div className="flex flex-col m-2 p-2 border border-gray-5 rounded-md">
        <ProfileImage />
        <Separator className="mt-5 " />
        <ProfileName />
        <CurrentLocation />
      </div>
    </div>
  );
};

export default EditBasic;
