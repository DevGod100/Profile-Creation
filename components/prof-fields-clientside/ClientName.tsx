"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { GetProfName } from "@/lib/actions/profile-actions";
import { Label } from "../ui/label";

const ClientName = () => {
  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await GetProfName();
      setOldField(data?.profname || "");
    }

    fetchData();
  }, []);

  return (
      <div className="flex p-2 m-2">
        <Label className="text-center font-semibold align-end">Name</Label>
        <Input
          type="text"
          name="profileName" //for the form data!!!
          value={oldField || ""}
          placeholder="Your name..."
          required
          onChange={(e) => setOldField(e.target.value)}
        />
        <Button type="submit">
          <Check size={20} strokeWidth={2} />
        </Button>
      </div>
  );
};

export default ClientName;




{
  /* <button onClick={() => alert(`Name updated to: ${name}`)}>
      Update Name
    </button> */
}

{
  /* <Input
          type="text"
          // placeholder={name}
          required
          name="profileName"
        /> */
}

// useEffect(() => {
//     setName(retrievedField || '');
//   }, [retrievedField]);

//   useEffect(() => {
//     async function fetchData() {
//       await theServerAction();
//     }
//     fetchData();
//   }, []);
