import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const navigate=useNavigate();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageClick = () => {
    document.getElementById("imageUpload").click();
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image, name }),
      });

      if (!response.ok) {
        throw new Error("Failed to save profile");
      } else {
        const data = await response.json();
        console.log("Saved:", data);
        navigate("/dashboard")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto h-[80vh]">
      <form onSubmit={handleSave}>
        <div className="mt-8 flex items-center justify-center">
          <div
            className="w-32 h-32 rounded-full overflow-hidden cursor-pointer"
            onClick={handleImageClick}
          >
            {image ? (
              <img
                className="w-full h-full object-cover"
                src={image}
                alt="Profile"
              />
            ) : (
              <div className="bg-gray-200 flex items-center justify-center w-full h-full">
                <span className="text-gray-400 justify-center items-center text-center">
                  Select Image
                </span>
              </div>
            )}
          </div>

          <div className="ml-4">
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
            <input
              type="text"
              className="mt-2 border border-gray-300 px-4 py-2 rounded"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-4 rounded flex "
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;
