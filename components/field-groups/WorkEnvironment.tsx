import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Availability from "../profile-fields/Availability";

const WorkEnvironment = () => {
  return (

    <Card >
      <CardHeader>
        <CardTitle>Work Environment</CardTitle>
        <CardDescription>What makes you the best?</CardDescription>
      </CardHeader>
      <CardContent className="grid">
        <Availability />
        <Separator className="mt-5" />

      </CardContent>
    </Card>
  
  );
};

export default WorkEnvironment;