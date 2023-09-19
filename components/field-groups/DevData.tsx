import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import DeveloperType from "../profile-fields/DeveloperType";

const DevData = () => {
  return (

    <Card>
      <CardHeader>
        <CardTitle>Developer Data</CardTitle>
        <CardDescription>What dev are you?</CardDescription>
      </CardHeader>
      <CardContent className="grid">
        <DeveloperType />
        <Separator className="mt-5" />
        <DeveloperType />

      </CardContent>
    </Card>
  
  );
};

export default DevData;
