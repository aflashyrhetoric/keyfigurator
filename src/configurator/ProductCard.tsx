import React, { MouseEventHandler, useState } from "react";
import { imgPath } from "src/utils/products";
import { Keyboard } from "types/keyboard";
// import styles from "./ProductCard.module.scss";

import { Card } from "flowbite-react";

interface Props {
    product: Keyboard;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const ProductCard: React.FC<Props> = ({ product, onClick }: Props) => {
    const {
        brand,
        size,
        img_path,
        full_title,
        product_name,
        product_description,
        interfaces,
        price,
    } = product;

    const imgSrc = imgPath(img_path);

    const test = true;

    return (
        <div className="max-w-sm">
            <div className="max-w-sm bg-white border border-gray-200 hover:shadow dark:bg-gray-800 dark:border-gray-700 hover:border-purple-400 hover:cursor-pointer">
                <a href="#">
                    <img
                        className="aspect-video"
                        src={test ? "https://place-hold.it/405x215" : imgSrc}
                        alt=""
                    />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            {brand} - {product_name}
                        </h5>
                    </a>
                    {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-h-fit">
                        {product_description}
                    </p> */}
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
