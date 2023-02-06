/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ProductItem } from "./components/ProductItem";
import { prodData } from "./data/products";

function App() {
  return (
    <div className="container mx-auto max-w-[1150px] flex lg:h-screen flex-col  justify-center mt-2">
      <h1 className="flex justify-center text-white_my text-4xl font-[Exo02] text-center mb-4">
        Ты сегодня покормил кота?
      </h1>
      <form action="" method="post">
        <div className="flex flex-wrap flex-auto justify-around">
          {prodData.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
          {/* <ProductItem product={prodData[0]} /> */}
        </div>
      </form>
    </div>
  );
}

export default App;
