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
import { GetAvailabilityType, GetDevType } from "@/lib/actions/profile-actions";
import { ScrollArea } from "../ui/scroll-area";
import LoadingCircle from "../GitHub-components/LoadingCircle";
import { availabilityTypes } from "@/lib/data-info/availability-types";


const ClientAvailability = () => {
  const [loading, setLoading] = useState(false);

  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await GetAvailabilityType();
      setOldField(data?.availability || "");
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="flex w-max">
      <Select name="Availability">
        <SelectTrigger className="min-w-[180px]">
          <SelectValue placeholder={oldField} />
        </SelectTrigger>
        <SelectContent>
        <ScrollArea className="h-72 min-w-[180px] ">
          <SelectGroup>
            {availabilityTypes.map((type, index) => (
              <SelectItem key={index} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </ScrollArea>
        </SelectContent>
      </Select>
      <Button type="submit" className="self-center ">
         {!loading && (<Check size={20} strokeWidth={2} />)}
          {loading && ( 
           <LoadingCircle />
          )} 
        </Button>
    </div>
  );
};

export default ClientAvailability;
