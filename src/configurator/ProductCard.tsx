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
   
    const test = true

    return (
        <div className="max-w-sm">
            <Card
                className="max-w-full min-h-full"
                imgSrc={test ? "https://place-hold.it/405x215": imgSrc}
            >
                <h5 className="text-2xl font-bold text-lg tracking-tight text-gray-900 dark:text-white">
                    {brand} - {product_name}
                </h5>
                <p className="font-normal block max-w-full text-gray-700 dark:text-gray-400">
                    {product_description}
                </p>
            </Card>
        </div>
    );
};

export default ProductCard;
