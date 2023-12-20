import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="bg-lime-900 rounded-lg ml-5 mr-5 pb-5">
        <img className="w-[350px] h-[350px] rounded-lg ml-auto mr-auto pt-5" src={product.image} alt="" />
        <h1 className="ml-12 text-xl font-bold mt-2 text-slate-100">Name: {product.name}</h1>

        <h2 className="ml-12 text-2xl font-bold mt-2 text-blue-950">Price: ${product.price}</h2>
        <button className="ml-12 mt-2 bg-red-900 hover:bg-blue-900 w-[20%] h-10 rounded-lg text-slate-100 font-bold">Bye Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
