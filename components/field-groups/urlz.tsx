
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import LinkedinUrl from "../profile-fields/LinkedInUrl";
import GitHubUrl from "../profile-fields/GitHubUrl";
import { Separator } from "@/components/ui/separator";


const URLz = () => {
  return (
    <Card >
      <CardHeader>
        <CardTitle>Url's</CardTitle>
        <CardDescription>Links to your accounts</CardDescription>
      <Separator className="mt-2" />

      </CardHeader>

      <CardContent className="grid">
        <LinkedinUrl />
        <GitHubUrl />
      </CardContent>
    </Card>
  
  );
};

export default URLz;
