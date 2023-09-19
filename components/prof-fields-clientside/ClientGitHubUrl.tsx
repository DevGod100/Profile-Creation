"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { GetGitHubUrl, GetLinkedInUrl } from "@/lib/actions/profile-actions";
import { Label } from "../ui/label";

const ClientGitHubUrl = () => {
  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await GetGitHubUrl();
      setOldField(data?.githuburl || "");
    }

    fetchData();
  }, []);

  return (
    <div className="p-2 m-2 ">
      <div className="flex flex-col">
        <Label className="text-gray-500 py-2">Github</Label>
        <div className="flex">
        <Input
          type="text"
          name="githubUrl" //for the form data!!!
          value={oldField || ""}
          placeholder="Your Github account..."
          required
          onChange={(e) => setOldField(e.target.value)}
        />
        <Button type="submit" className="self-center">
          <Check size={20} strokeWidth={2} />
        </Button>
        </div>
      </div>
    </div>
  );
};

export default ClientGitHubUrl;