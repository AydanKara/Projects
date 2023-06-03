import Image from "next/legacy/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-[15px]">
      <div className="w-full bg-[#f1f2f3] flex justify-center p-[25px] rounded-bl-[46px] rounded-t-[12px]">
        <Link href="/product">
          <div className="relative w-36 h-36 hover:scale-110 transition-all">
            <Image src="/images/f1.png" alt="f1" layout="fill" priority/>
          </div>
        </Link>
      </div>
      <div className="p-[25px] text-white">
        <h4 className="text-xl font-semibold mb-2">Delicious Pizza</h4>
        <p className="text-[15px] mb-4">
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </p>
        <div className="flex justify-between items-center">
          <span>$20</span>
          <button className="btn-primary w-10 h-10 rounded-full !p-0 grid place-content-center">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
