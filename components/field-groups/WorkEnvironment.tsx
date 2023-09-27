
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Availability from "../profile-fields/Availability";
import PreferredWorkEnv from "../profile-fields/PreferredWorkEnv";
import CareerGoals from "../profile-fields/CareerGoals";
import WorkPlace from "../profile-fields/WorkPlace";

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
        <CareerGoals />
       <WorkPlace />
      </CardContent>
    </Card>
  
  );
};

export default WorkEnvironment;