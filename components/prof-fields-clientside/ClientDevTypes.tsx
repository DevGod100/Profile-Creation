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

const ClientDevTypes = () => {
  //Set Field functionality------------------------------------------
  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await GetDevType();
      setOldField(data?.devtype || "");
    }

    fetchData();
  }, []);
  //-----------------------------------------------------------------

  return (
    <div className="flex">
      <Select name="devType">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={oldField} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {developerTypes.map((type, index) => (
              <SelectItem key={index} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type="submit" className="self-center">
        <Check size={20} strokeWidth={2} />
      </Button>
    </div>
  );
};

export default ClientDevTypes;

{
  /* <div className="p-2 m-2 ">
<div className="flex flex-col">
  <Label className="text-gray-500 py-2">Developer Type</Label>
  <div className="flex">
    <Input
      type="text"
      name="devtype" //for the form data!!!
      value={oldField || ""}
      placeholder="Data Analyst..."
      required
      onChange={(e) => setOldField(e.target.value)}
    />
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
</div> */
}
