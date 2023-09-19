"use client";
import { CldUploadButton } from "next-cloudinary";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { GetImage } from "@/lib/actions/profile-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LoadingCircle from "../GitHub-components/LoadingCircle";


const UploadIMG = () => {
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      const data = await GetImage();
      setOldField(data?.profimage || "");
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="flex justify-between ">
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
        <div
          className="relative group"
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
          <Avatar className="cursor-pointer scale-150 transition-brightness brightness-100 group-hover:brightness-75 items-center">
            <AvatarImage
              className="object-cover"
              src={`http://res.cloudinary.com/uploaded-profile-images/image/upload/v1693526415/${oldField}`}
              alt="profile-image"
            />
            <AvatarFallback className="bg-blue-400"><LoadingCircle/></AvatarFallback>
          </Avatar>

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
          <Button type="submit" className="self-center">
            {!loading && <p>Confirm Image</p>}
            {loading && <LoadingCircle />}
          </Button>
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
