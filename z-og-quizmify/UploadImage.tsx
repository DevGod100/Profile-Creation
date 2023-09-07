"use client"

import { useSession } from "next-auth/react";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

type UploadResult = {
    event: 'success',
    info: {
     public_id: string
   }
 };
 
 type UploadImageProps = {
     initialImageId: string;
 };

const UploadImage = ({ initialImageId }: UploadImageProps) => {
    const [imageId, setImageId] = useState(initialImageId)
    const { data: session, update } = useSession();

    const handleImageUpload = async (result: any) => {
        if (result.event === 'success' && result.info) {
        // Update the session's user.image property
        await update({ user: { ...session?.user, image: result.info.public_id } });
        setImageId(result.info.public_id);
        
        console.log(session);
        }
};
  return (
    <div>
    <CldUploadButton 
   onUpload={handleImageUpload}
   uploadPreset="web_dev_cody" 
   />

{imageId &&
  <CldImage
    width="360"
    height="600"
    src={imageId}
    sizes="100vw"
    alt="Description of my image"
  />
}
    </div>
  )
}

export default UploadImage