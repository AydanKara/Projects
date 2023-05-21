import Image from "next/legacy/image";

const MenuItem = () => {
  return (
    <div>
      <div className="relative w-36 h-36 z-50">
        <Image src="/images/f1.png" alt="f1" layout="fill" />
      </div>
    </div>
  );
};

export default MenuItem;
