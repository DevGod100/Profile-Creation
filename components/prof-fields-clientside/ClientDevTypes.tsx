"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { GetProfName } from "@/lib/actions/profile-actions";
import { Label } from "../ui/label";
import { developerTypes } from "@/lib/data-info/developer-types";

const ClientDevTypes = () => {
  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await GetProfName();
      setOldField(data?.profname || "");
    }

    fetchData();
  }, []);

  return (
    <div className="p-2 m-2 ">
      <div className="flex flex-col">
        <Label className="text-gray-500 py-2">Name</Label>
        <div className="flex">
        <Input
          type="text"
          name="profileName" //for the form data!!!
          value={oldField || ""}
          placeholder="Your name..."
          required
          onChange={(e) => setOldField(e.target.value)}
        />
              <h2>List of Developer Types:</h2>
      <ul>
        {developerTypes.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    
        <Button type="submit" className="self-center">
          <Check size={20} strokeWidth={2} />
        </Button>
        </div>
      </div>
    </div>
  );
};

export default ClientDevTypes;