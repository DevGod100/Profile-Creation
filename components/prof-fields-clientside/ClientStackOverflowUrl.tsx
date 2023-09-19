"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check} from "lucide-react";
import { useEffect, useState } from "react";
import { GetStackOverflowUrl } from "@/lib/actions/profile-actions";
import { Label } from "../ui/label";
import LoadingCircle from "../GitHub-components/LoadingCircle";

const ClientLinkedInUrl = () => {
  const [loading, setLoading] = useState(false);

  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await GetStackOverflowUrl();
      setOldField(data?.stackoverflowurl || "");
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="py-2" >
      <div className="flex flex-col">
      <Label className="text-gray-500 py-2">Stack Overflow</Label>
        <div className="flex">
        <Input
          type="text"
          name="stackoverflowUrl" //for the form data!!!
          value={oldField || ""}
          placeholder="Your Stack Overflow account..."
          required
          onChange={(e) => setOldField(e.target.value)}
        />
         <Button type="submit" className="self-center ">
         {!loading && (<Check size={20} strokeWidth={2} />)}
          {loading && ( 
           <LoadingCircle />
          )} 
        </Button>
        </div>
      </div>
    </div>
  );
};

export default ClientLinkedInUrl;