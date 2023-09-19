import { Separator } from "@/components/ui/separator";
import ProfileImage from "../profile-fields/ProfileImage";
import ProfileName from "../profile-fields/ProfileName";
import CurrentLocation from "../profile-fields/CurrentLocation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const EditBasic = () => {
  return (
    // <div className="flex min-h-max flex-col items-center justify-between p-24">
    // <div className="flex flex-col m-2 p-2 border border-gray-5 rounded-md">
    <Card>
      <CardHeader>
        <CardTitle>Basic Info</CardTitle>
        <CardDescription>Who are You?</CardDescription>
      </CardHeader>
      <CardContent className="grid">
        <ProfileImage />
        <Separator className="mt-2" />
        <ProfileName />
        <CurrentLocation />
      </CardContent>
    </Card>
    // </div>
    // </div>
  );
};

export default EditBasic;
