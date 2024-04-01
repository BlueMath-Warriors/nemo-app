import React from "react";
import Image from "next/image";

const PersonProfile = ({ data, handleUserBioRoute }) => {
  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer w-[150px] mb-4 relative"
      onClick={() => handleUserBioRoute(data.Name)}
    >
      <div className="relative">
        <Image
          src={data.profile_img}
          width={60}
          height={60}
          className="rounded-full"
          alt="profile"
        />
        <div className="absolute bottom-0 right-[-8px]">
          <Image
            src={"/images/discord.png"}
            width={25}
            height={25}
            className="rounded-full"
            alt="logo"
          />
        </div>
      </div>
      <p className="text-gray-100 text-xl underline mt-1">{data.Name}</p>
    </div>
  );
};

export default PersonProfile;
