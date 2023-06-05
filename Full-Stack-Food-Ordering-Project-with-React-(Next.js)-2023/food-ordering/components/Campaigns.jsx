import Image from "next/legacy/image";
import Title from "./UI/Title";
import { FaShoppingCart } from "react-icons/fa";

const CampaignsItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center lg:justify-start xl:text-left justify-center text-center  gap-x-4 flex-wrap xs:mx-0 mx-4">
      <div className="relative w-[165px] h-[165px] border-[5px] border-primary rounded-full overflow-hidden lg:mb-0 mb-4">
        <Image
          src="/images/o1.jpg"
          alt="image"
          layout="fill"
          className="hover:scale-110 transition-all"
          priority
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Tasty Thursday</Title>
        <div className="font-dancing lg:my-1 my-[10px]">
          <span className="text-[40px]">20% </span>
          <span>Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
          Order Now <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between gap-7 flex-wrap container mx-auto py-20">
      <CampaignsItem />
      <CampaignsItem />
    </div>
  );
};

export default Campaigns;
