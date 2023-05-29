import Title from "@/components/UI/Title";
import Image from "next/legacy/image";
import { useState } from "react";

const itemsExtra = [
  {
    id: 1,
    name: "Extra 1",
    price: 1,
  },
  {
    id: 2,
    name: "Extra 2",
    price: 1,
  },
  {
    id: 3,
    name: "Extra 3",
    price: 1,
  },
]

const Index = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(itemsExtra);
  const [extras, setExtras] = useState([]);

  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  }

  const changePrice = (number) => {
    setPrice(number + price);
  } 

  const handleChange = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  }

  return (
    <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image
          src="/images/f1.png"
          alt="img"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          ${price}
        </span>
        <p className="text-sm md:pr-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          commodi unde corporis veniam reiciendis et explicabo sapiente possimus
          nemo exercitationem aliquid dolor nihil in ratione fugiat
          necessitatibus tempore, excepturi quis.
        </p>
        <div className="mt-6">
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-16 md:justify-start justify-center">
            <div className="relative w-8 h-8 cursor-pointer" onClick={() => handleSize(0)}>
              <Image src="/images/size.png" alt="size" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12 cursor-pointer" onClick={() => handleSize(1)}>
              <Image src="/images/size.png" alt="size" layout="fill" />
              <span className="absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16 cursor-pointer" onClick={() => handleSize(2)}>
              <Image src="/images/size.png" alt="size" layout="fill" />
              <span className="absolute top-0 -right-3 text-xs bg-primary rounded-full px-[5px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-4">
          <h4 className="text-xl font-bold">Choose additional ingredients</h4>
          <div className="flex gap-x-4 my-2 md:justify-start justify-center">
            {extraItems.map((item) => (
              <label className="flex items-center gap-x-1" key={item.id}>
                <input type="checkbox" className="w-5 h-5 accent-primary" onChange={(e) => handleChange(e, item)}/>
                <span className="text-sm font-semibold">{item.name}</span>
              </label>
            ))}
          </div>
        </div>
        <button className="btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Index;
