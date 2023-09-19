"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { GetDevType } from "@/lib/actions/profile-actions";
import { developerTypes } from "@/lib/data-info/developer-types";
import { ScrollArea } from "../ui/scroll-area";

const ClientDevTypes = () => {
  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await GetDevType();
      setOldField(data?.devtype || "");
    }

    fetchData();
  }, []);

  return (
    <div className="flex w-max">
      <Select name="devType">
        <SelectTrigger className="min-w-[180px]">
          <SelectValue placeholder={oldField} />
        </SelectTrigger>
        <SelectContent>
        <ScrollArea className="h-72 min-w-[180px] ">
          <SelectGroup>
            {developerTypes.map((type, index) => (
              <SelectItem key={index} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </ScrollArea>
        </SelectContent>
      </Select>
      <Button type="submit" className="self-center">
        <Check size={20} strokeWidth={2} />
      </Button>
    </div>
  );
};

export default ClientDevTypes;
