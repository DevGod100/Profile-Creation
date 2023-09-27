"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { GetLinkedInUrl, GetPersonalPortfolio } from "@/lib/actions/profile-actions";
import { Label } from "../ui/label";
import LoadingCircle from "../GitHub-components/LoadingCircle";

const ClientPersonalPortfolio = () => {
  const [loading, setLoading] = useState(false);

  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await GetPersonalPortfolio();
      setOldField(data?.personalportfolio || "");
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
    <div className="py-2" >
      <div className="flex flex-col">
        <Label className="text-gray-500 py-2">Portfolio Site</Label>
        <div className="flex">
        <Input
          type="text"
          name="personalPortfolio" //for the form data!!!
          value={oldField || ""}
          placeholder="Your Personal Portfolio..."
          required
          onChange={(e) => setOldField(e.target.value)}
        />
         <Button type="submit" className="self-center" onClick={loadForThreeSec}>
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
   
   export default ClientPersonalPortfolio;