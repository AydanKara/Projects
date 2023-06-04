import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../UI/Title";
import { AiFillCloseCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import Input from "../form/input";


const Search = ({ setIsSearchModal }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        setProducts(res.data);
        setFiltered(res.data.slice(0, 5));
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, []);

  const handleSearch = (e) => {
    const searchFilter = products
      .filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .slice(0, 5);
    setFiltered(searchFilter);
  };
  return (
    <div className="fixed grid place-content-center w-screen h-screen top-0 left-0 z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="p-10 rounded-3xl relative z-50 md:w-[600px] w-[370px] bg-white border-2">
            <Title addClass="text-[40px] text-center">Search</Title>
            <Input placeholder="Search..." onChange={handleSearch} />
            {products.length > 0 ? (
              <ul className="mt-4">
                {filtered.length > 0 ? (
                  filtered.map((product) => (
                    <li
                      className="flex items-center justify-between p-1 hover:bg-primary transition-all px-2 cursor-pointer"
                      key={product._id}
                      onClick={() => {
                        router.push(`/product/${product?._id}`);
                        setIsSearchModal(false);
                      }}
                    >
                      <div className="relative flex">
                        <Image
                          src={product?.img}
                          alt={product?.title}
                          width={48}
                          height={48}
                        />
                      </div>
                      <span className="font-bold">{product?.title}</span>
                      <span className="font-bold">${product.prices[0]}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-center font-semibold">No results found!</p>
                )}
              </ul>
            ) : (
              <div className="flex justify-center items-center mt-3">
                <PacmanLoader color="#fca311" />
              </div>
            )}
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsSearchModal(false)}
            >
              <AiFillCloseCircle
                size={30}
                className="text-gray-400 transition-all hover:text-primary"
              />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
