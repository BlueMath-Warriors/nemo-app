import Image from "next/image";

const PersonProfile = ({ data, handleUserBioRoute }) => {
  const decodedProfileImg = data.profile_img
    ? decodeURIComponent(data.profile_img)
    : "/images/default_image.png";

  const splitNameByWhitespace = (name) => {
    const words = name.split(" ");
    const half = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, half).join(" ");
    const secondHalf = words.slice(half).join(" ");
    return [firstHalf, secondHalf];
  };

  const [firstLine, secondLine] = splitNameByWhitespace(data.Name);

  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer w-[200px] mb-4 relative"
      onClick={() => handleUserBioRoute(data.Name)}
    >
      <div className="relative">
        <Image
          src={decodedProfileImg}
          width={120}
          height={120}
          className="rounded-full"
          alt="profile"
        />
        <div className="absolute bottom-[-2px] right-[-10px]">
          <Image
            src={"/images/discord.png"}
            width={45}
            height={45}
            className="rounded-full"
            alt="logo"
          />
        </div>
      </div>
      <p className="text-gray-100 text-base text-center mt-1">
        {firstLine}
        <br />
        {secondLine}
      </p>
    </div>
  );
};

export default PersonProfile;
