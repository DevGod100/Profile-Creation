import DisplayUsers from "@/components/DisplayUsers";
import DevData from "@/components/field-groups/DevData";
import EditBasic from "@/components/field-groups/EditBasic";
import WorkEnvironment from "@/components/field-groups/WorkEnvironment";
import URLz from "@/components/field-groups/urlz";
import { cn } from "@/lib/utils";

function ShadCnContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}
const profile = () => {
  return (
    <>
      <div className=" items-start justify-center gap-6 rounded-lg p-8 sm:flex md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <ShadCnContainer>
            <EditBasic />
          </ShadCnContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <ShadCnContainer>
            <DevData />
          </ShadCnContainer>
          <ShadCnContainer>
            <WorkEnvironment />
          </ShadCnContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <ShadCnContainer>
            <URLz />
          </ShadCnContainer>
        </div>
      </div>
      <DisplayUsers />
    </>
  );
};

export default profile;
