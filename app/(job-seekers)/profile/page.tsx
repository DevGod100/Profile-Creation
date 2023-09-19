import DisplayUsers from "@/components/DisplayUsers";
import HideUiIfNotLoggedIn from "@/components/HideUiIfNotLoggedIn";
import DevData from "@/components/field-groups/DevData";
import EditBasic from "@/components/field-groups/EditBasic";
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
  )
}
const profile = () => {
  return (
    <div>
      <HideUiIfNotLoggedIn />
      <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
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
          <EditBasic />
          </ShadCnContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <ShadCnContainer>
          <EditBasic />
          </ShadCnContainer>
          
        </div>
      </div>
      {/* <EditBasic /> */}
      {/* <DevData /> */}
      {/* <DisplayUsers /> */}
      </div>
  );
};

export default profile;
