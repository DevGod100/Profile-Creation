import { Separator } from "@/components/ui/separator";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/GitHub-components/GitHubShadCnPageHeader";

import { ArrowDownIcon } from "lucide-react";
import ProfileStats from "@/components/GitHub-components/ProfileStats";
import HideUiIfNotLoggedIn from "@/components/HideUiIfNotLoggedIn";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <HideUiIfNotLoggedIn />
      <div className="container relative">
        <PageHeader className="page-header pb-8">
          <p
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            🧙🏼‍♂️ <Separator className="mx-2 h-4" orientation="vertical" />{" "}
            <span className="hidden sm:inline">
            Your Profile matters.
            </span>
            <ArrowDownIcon className="ml-1 h-4 w-4" />
          </p>
          <PageHeaderHeading className="hidden md:block">
            Fill in your profile.
          </PageHeaderHeading>
          <PageHeaderDescription>
          A few minutes of typing and your profile is complete!
          </PageHeaderDescription>
          <ProfileStats />
         
        </PageHeader>
        <section>
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
