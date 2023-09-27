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
import { GetPreferredWorkEnv } from "../../lib/actions/profile-actions";
import { ListOfPreferredWorkEnvironments } from "@/lib/data-info/work-related";

const ClientPreferredWorkEnv = () => {

  const [loading, setLoading] = useState(false);

  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await GetPreferredWorkEnv();
      setOldField(data?.prefworkenv || "");
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
<Label className="text-gray-500  py-2 ">Preferred Work Environment</Label>
  
    <div className="flex">
      <Select name="prefworkEnv">
        <SelectTrigger className="min-w-[180px]">
          <SelectValue placeholder={oldField} />
        </SelectTrigger>
        <SelectContent>
        <ScrollArea className=" min-w-[180px] ">
          <SelectGroup>
            {ListOfPreferredWorkEnvironments.map((type, index) => (
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

export default ClientPreferredWorkEnv;

// const [loading, setLoading] = useState(false);

// const [oldField, setOldField] = useState<string | null>(null);

// useEffect(() => {
//   async function fetchData() {
//     setLoading(true);
//     const data = await GetDevType();
//     setOldField(data?.devtype || "");
//     setLoading(false);
//   }

//   fetchData();
// }, []);

{
  /* <div className="flex w-max">
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
<Button type="submit" className="self-center" onClick={loadForThreeSec}>
   {!loading && (<Check size={20} strokeWidth={2} />)}
    {loading && ( 
     <LoadingCircle />
    )} 
  </Button>
</div> */
}
