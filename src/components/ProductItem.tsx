/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import Svg from "../img/cat_min.png";
import { IProducts } from "../models/product";
import DOMPurify from "isomorphic-dompurify";

interface ProductProps {
  product: IProducts;
}

export function ProductItem({ product }: ProductProps) {
  const prodEnded = product.prodEnded;
  const opacity = prodEnded ? "opacity-50" : "";

  const id = product.id;

  const inputElement = useRef<HTMLInputElement>(null);
  const [inputChec, setProdDesc] = useState(false);
  const [mousChec, setMousChec] = useState(false);

  const ChekInput = () => {
    setMousChec(false);
    setProdDesc(!inputChec);
    inputElement.current!.checked = !inputChec;
  };

  const onMouseLeave = () => {
    if (inputChec) {
      setMousChec(true);
    }
  };

  return (
    <div onMouseLeave={onMouseLeave} className=" relative mb-3  ">
      <label htmlFor={`00${id}`} className="group">
        <input
          onClick={ChekInput}
          ref={inputElement}
          type="checkbox"
          id={`00${id}`}
          value=""
          className={`peer group hidden`}
          disabled={prodEnded}
          required
        />

        <svg
          className="relative stroke-[4px] w-[335px] h-[495px] 
             group-hover:peer-checked:stroke-red_400_my group-hover:stroke-blue_500_my
            peer-checked:stroke-red_500_my peer-disabled:stroke-gray-400 stroke-blue_400_my"
        >
          <path
            fill="#f2f2f2"
            d="M318,10H53L10,53v425c0,6.63,5.37,12,12,12h296c6.63,0,12-5.37,12-12V22C330,15.37,324.63,10,318,10z"
          ></path>
          <path
            fill={`url(#img${id})`}
            d="M318,10H53L10,53v425c0,6.63,5.37,12,12,12h296c6.63,0,12-5.37,12-12V22C330,15.37,324.63,10,318,10z"
          ></path>
          <defs>
            <pattern
              id={`img${id}`}
              patternUnits="userSpaceOnUse"
              width="330"
              height="490"
            >
              <image
                className={opacity}
                xlinkHref={Svg}
                x="-10"
                y="140"
                width="285"
                height="450"
              ></image>
            </pattern>
          </defs>
        </svg>

        <div
          className="absolute top-[400px] left-60 w-20  h-20 rounded-full 
            peer-checked:bg-red_500_my bg-blue_400_my peer-disabled/:bg-gray_400_my
            group-hover:peer-checked:bg-red_400_my group-hover:bg-blue_500_my
            "
        >
          <div className="relative text-white_my text-center font-[trebuch]">
            <p className="text-[44px] leading-none mt-2 ">
              {" "}
              {product.prodDetail.weight}
            </p>
            <p className="text-xl leading-none  ">кг</p>
          </div>
        </div>

        <div
          className={`absolute  top-6 left-16 font-[trebuch] peer-disabled:opacity-50`}
        >
          <p
            className={`text-gray_700_my 
            ${mousChec ? "block group-hover:hidden" : ""}
            `}
          >
            Сказочное заморское явство
          </p>

          {inputChec && mousChec && (
            <p className="text-red_500_my hidden group-hover:block">
              Котэ не одобряет?
            </p>
          )}

          <p className="text-5xl font-[trebuchetB] ">Нямушка</p>
          <p className=" text-2xl font-[trebuchetB] ">{product.prodContent}</p>
          <p
            className=" text-sm mt-3 text-gray_700_my"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.prodDetail.count),
            }}
          ></p>
        </div>
      </label>
      <div className="text-center mt-2 text-[13px] shadow-xl  font-[trebuch]">
        {!prodEnded && !inputChec && (
          <div>
            <span className="text-white_my"> Чего сидишь? Порадуй котэ </span>
            <a
              onClick={ChekInput}
              className="underline decoration-dashed text-[13px] cursor-pointer text-blue_400_my hover:text-blue_500_my"
            >
              купи.
            </a>
          </div>
        )}
        {!prodEnded && inputChec && (
          <span className="text-[13px] text-white_my">
            {product.prodDescription}
          </span>
        )}

        {prodEnded && (
          <span className="text-[13px] text-amber_200_my">
            Печалька {product.prodContent} закончились
          </span>
        )}
      </div>
    </div>
  );
}
