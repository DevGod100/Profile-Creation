'use client'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import { GetProfName } from '@/lib/actions/profile-actions'

const ClientName = () => {
  const [oldField, setOldField] = useState<string | null>(null);

  const DELAY = 3000; // 3000 milliseconds = 3 seconds


useEffect(() => {
  async function fetchData() {
    const data = await GetProfName();
    setOldField(data?.profname || '');
  }

  // // Fetch data once after a 3-second delay
  // const timeoutId = setTimeout(() => {
    fetchData();
  // }, DELAY);

  // // Clean up the timeout when the component unmounts
  // return () => clearTimeout(timeoutId);
}, []);

  return (
    <div>
      {/* {oldField ? ( */}
        <div>
        <Input
      type="text"
      name='profileName' //for the form data!!!
      value={oldField || ""}
      placeholder='Your name...'
      required
      onChange={(e) => setOldField(e.target.value)}
    />
        <Button type="submit">
          <Check size={20} strokeWidth={2}/>
        </Button>
        </div>
      {/* ): (
        <p>no values</p>
      )} */}
    
    </div>
  )
}

export default ClientName



    {/* <button onClick={() => alert(`Name updated to: ${name}`)}>
      Update Name
    </button> */}

         {/* <Input
          type="text"
          // placeholder={name}
          required
          name="profileName"
        /> */}

    // useEffect(() => {
    //     setName(retrievedField || '');
    //   }, [retrievedField]);

    //   useEffect(() => {
    //     async function fetchData() {
    //       await theServerAction();
    //     }
    //     fetchData();
    //   }, []);