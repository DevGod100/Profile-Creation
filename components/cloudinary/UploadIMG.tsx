"use client";
import { CldUploadButton } from "next-cloudinary";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { GetImage } from "@/lib/actions/profile-actions";
import { Separator } from "../ui/separator";

const UploadIMG = () => {
  const [theImage, setTheImage] = useState(null);

  const handleUploadSuccess = (response: any) => {
    console.log(response);

    if (response.info && response.info.public_id) {
      // if (response) {
      setTheImage(response.info.public_id);
    }
  };

  //Retrieve old image functionality
  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await GetImage();
      setOldField(data?.profimage || "");
    }

    fetchData();
  }, []);

  return (
    <div
      className="flex justify-between "
    >
      <input
        type="hidden"
        name="uploadedImage"
        value={theImage ? theImage : ""}
      />
      {theImage === null && (
        // <div className="relative w-full border  border-dashed border-indigo-600 hover:bg-slate-300 hover:text-white">
        //   <img
        //       className="absolute inset-0 h-full opacity-70 rounded-full"
        //       src={`http://res.cloudinary.com/uploaded-profile-images/image/upload/v1693526415/${oldField}`}
        //       alt=""
        //     />
        <div className="relative group"
        onClick={() => {
          // Simulate a click on the CldUploadButton
          const uploadButton = document.querySelector(
            ".UPLOAD-WAS-PRESSED"
          ) as HTMLInputElement; // class of CldUploadButton
          if (uploadButton) {
            uploadButton.click(); // Trigger the click event on the CldUploadButton
          }
        }}
        >
          <img
            className="cursor-pointer w-full h-20 object-cover group-hover:opacity-70 rounded-full"
            src={`http://res.cloudinary.com/uploaded-profile-images/image/upload/v1693526415/${oldField}`}
            alt=""
          />
          <ImagePlus className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl opacity-0 group-hover:opacity-100 " />

          <CldUploadButton
            uploadPreset="web_dev_cody"
            onSuccess={handleUploadSuccess}
            className="UPLOAD-WAS-PRESSED absolute top-0 left-0 w-full h-20 rounded-full sr-only"  
          />
        </div>
      )}
      {theImage && (
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
