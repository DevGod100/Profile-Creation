"use client";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { Button } from "../ui/button";
import { ImagePlus } from "lucide-react";
import Image from "next/image";

const UploadIMG = () => {
  const [theImage, setTheImage] = useState(null);

  const handleUploadSuccess = (response: any) => {
    console.log(response);

    if (response.info && response.info.public_id) {
      // if (response) {
      setTheImage(response.info.public_id);
    }
  };

  return (
    <div className="flex justify-between">
      <input
        type="hidden"
        name="uploadedImage"
        value={theImage ? theImage : ""}
      />
      {theImage === null && (
              <div className="w-full  border border-dashed border-indigo-600 hover:bg-slate-300 hover:text-white">
              <div className="flex justify-center py-10">
                <CldUploadButton
                  uploadPreset="web_dev_cody"
                  onSuccess={handleUploadSuccess}
                  className="transition-transform"
                />
                <ImagePlus />
              </div>
            </div>
      )}
      {theImage &&( 
      <div className="w-full flex justify-center py-4">
         <Image
              className="rounded-full object-cover h-[40px] w-[40px]"
              width={35}
              height={35}
              src={`http://res.cloudinary.com/uploaded-profile-images/image/upload/v1693526415/${theImage}`}
              alt="- Profile Image -"
              />
        <Button type="submit">Confirm Image</Button>
      </div>
      )}
    </div>
  );
};

export default UploadIMG;

// <>
//   <input
//    type="hidden"
//    name="uploadedImage"
//    value={theImage ? theImage : ''}
// />
// <CldUploadButton
// uploadPreset="web_dev_cody"
// onSuccess={handleUploadSuccess}
// />
// </>

// interface UploadImageProps {
//     onUpload: (imageData: { public_id: string }) => void;
// }

// const UploadIMG = ({ onUpload }: UploadImageProps) => {

// {theImage && (
//   <div>
//    <CldImage
//           width="960"
//           height="600"
//           src={theImage}
//           alt="Description of my image"
//           sizes="100vw"
//         />
// </div>

// )}