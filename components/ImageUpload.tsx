import React, { useState, useRef } from "react";


function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Function to handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // Function to clear the selected image
  const clearImage = () => {
    setSelectedImage(null);

    // If you want to clear the image displayed using the ref
    if (imgRef.current) {
      imgRef.current.src = "";
    }
  };

  return (
    <div className="m-3 flex flex-col">
      <div className=" bg-gray-300 w-full  h-16 rounded-md ">
        <input
          type="file"
          accept="image/*" // Accept only image files
          onChange={handleImageChange}
          id="imageInput"
          style={{ display: "none" }} // Hide the default input style
        />
        <label htmlFor="imageInput" className=" justify-center items-center text-lg font-bold cursor-pointer">
          Upload Image
        </label>

        {selectedImage && (
          <div className=" justify-end items-end  h-10 w-10   pr-4 ">
            <img
              ref={imgRef}
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className="image-preview-image"
            />
            <button onClick={clearImage} className=" bg-black text-white  ">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
