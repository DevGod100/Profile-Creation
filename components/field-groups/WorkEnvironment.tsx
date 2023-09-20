import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Availability from "../profile-fields/Availability";
import PreferredWorkEnv from "../profile-fields/PreferredWorkEnv";

const WorkEnvironment = () => {
  return (

    <Card >
      <CardHeader>
        <CardTitle>Work Environment</CardTitle>
        <CardDescription>What makes you the best?</CardDescription>
      </CardHeader>
      <CardContent className="grid">
        <Availability />
        <PreferredWorkEnv />

      </CardContent>
    </Card>
  
  );
};

export default WorkEnvironment;