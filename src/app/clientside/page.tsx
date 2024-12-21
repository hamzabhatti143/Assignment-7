"use client";
import React, { useEffect, useState } from "react";
interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
const Clientside = () => {
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );

      const parseResponse: Products[] = await response.json();

      console.log("todo >>>" + parseResponse);
      setData(parseResponse);
    };
    fetchData();
  }, []);
  return (
    <>
        <h1 className="text-6xl text-blue-900 text-center px-30 py-10">Client Side</h1>

    <div className="w-full flex justify-around items-center flex-wrap mt-6 gap-4">
      {data.map((products, index) => (
        <div key={index} className="w-11/12 flex justify-center flex-col items-center md:w-1/4 mt-10 md:mt-0 ">
          <div className="">
            <img src={products.image} alt="Images" width={120} height={80} />
          </div>

          <h3 className="font-semibold leading-7 text-2xl">
            {products.title}
          </h3>
          <p className=" text-base">
            {products.category}
          </p>
          <p className=" text-lg">
            {products.description}
          </p>
          <h3 className="font-semibold leading-7 text-xl">
            {products.price}
          </h3>
        </div>
      ))}

</div>
    </>
  );
};

export default Clientside;
