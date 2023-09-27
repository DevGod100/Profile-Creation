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
import { Check} from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import LoadingCircle from "../GitHub-components/LoadingCircle";
import { Label } from "../ui/label";
import { ListOfWorkPlace } from "@/lib/data-info/work-related";
import { GetWorkPlace } from "@/lib/actions/profile-actions";


const ClientWorkPlace = () => {

  const [loading, setLoading] = useState(false);

  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await GetWorkPlace();
      setOldField(data?.workplace || "");
      setLoading(false);
    }

    fetchData();
  }, []);

  const loadForThreeSec = () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  };


  return (

<div className="flex flex-col">
<Label className="text-gray-500  py-2 ">Work Place</Label>
  
    <div className="flex">
      <Select name="workPlace">
        <SelectTrigger className="min-w-[180px]">
          <SelectValue placeholder={oldField} />
        </SelectTrigger>
        <SelectContent>
        <ScrollArea className=" min-w-[180px] ">
          <SelectGroup>
            {ListOfWorkPlace.map((type, index) => (
              <SelectItem key={index} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </ScrollArea>
        </SelectContent>
      </Select>
      <Button type="submit" className="self-center" onClick={loadForThreeSec}>
         {!loading && (<Check size={20} strokeWidth={2} />)}
          {loading && (
           <LoadingCircle />
          )}
        </Button>
    </div>
    </div>
  );
};

export default ClientWorkPlace;

