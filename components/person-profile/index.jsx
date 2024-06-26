import Image from "next/image";

const PersonProfile = ({ data, handleUserBioRoute }) => {
  const decodedProfileImg = data.profile_img
    ? decodeURIComponent(data.profile_img)
    : "/images/default_image.png";

  //Checking only first 3 indexes of the list 
  //From any first 3 indexes if logo found not null then that will be used otherwise 
  //default logo image will be used.
  const companyLogo = data.Experiences[0].company_logo
    ? data.Experiences[0].company_logo
    : data.Experiences.length > 1 && data.Experiences[1].company_logo
    ? data.Experiences[1].company_logo
    : data.Experiences.length > 2 && data.Experiences[2].company_logo
    ? data.Experiences[2].company_logo
    : "/images/default_logo.png";

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
            src={companyLogo}
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
