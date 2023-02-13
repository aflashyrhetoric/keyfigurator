import { useState } from "react";
import ProductCard from "src/configurator/ProductCard";
import { Keyboard, KeyboardSizes } from "types/keyboard";

import { setPrefSize } from "src/store/slices/sizeSlice";
import { setPrefOS } from "src/store/slices/osSlice";
import { togglePrefInterface } from "src/store/slices/interfaceSlice";
import { setPrefFrameColor } from "src/store/slices/frameColorSlice";
import { togglePrefBacklighting } from "src/store/slices/keyboardBacklightingSlice";
import { togglePrefSwitch } from "src/store/slices/switchSlice";

// import cStyles from "../styles/Configurator.module.scss";
// import ProductModalInfo from "src/configurator/ProductModalInfo";
import UIShellPage from "templates/page-uishell";
import KeyboardParameters from "src/configurator/parameters/KeyboardParameters";
import { PickerProps } from "types/app";
import { userPreferencesToTags } from "src/shared/products";
// import { useDispatch } from "react-redux";

const KeyboardPicker = ({ products, navigate, prefs = {} }: PickerProps) => {
    // const [highlightedProduct, setHighlightedProduct] =
    // useState<Keyboard>(null);
    // const productIsHighlighted = highlightedProduct !== null;

    // const [modalOpen, setModalOpen] = useState(false);

    // const dispatch = useDispatch();

    // const highlightedProductData = productIsHighlighted
    //     ? products.find(
    //           (p) => p.product_name === highlightedProduct.product_name
    //       )
    //     : null;

    // const resetState = () => {
    //     setHighlightedProduct(null);
    //     setModalOpen(false);
    // };
    // return "hi";

    return (
        <div>
            <div className="flex p-4 border-b-2 sm:ml-64">
                <div className="items-center justify-center min-h-1 px-2 border-r-2">
                    <span className="text-xs font-bold mr-1">
                        available switch types
                    </span>
                    <div className="flex">
                        <div className="font-xs text-small-caps mr-2">
                            <input className="mr-1" type="checkbox" />
                            <span>linear</span>
                        </div>
                        <div className="font-xs text-small-caps mr-2">
                            <input className="mr-1" type="checkbox" />
                            <span>clicky</span>
                        </div>
                        <div className="font-xs text-small-caps">
                            <input className="mr-1" type="checkbox" />
                            <span>tactile</span>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-center min-h-1 px-2 border-r-2">
                    <span className="text-xs font-bold mr-1">colorways</span>
                    <div className="flex">
                        <div className="font-xs text-small-caps mr-2">
                            <input className="mr-1" type="checkbox" />
                            <span>white</span>
                        </div>
                        <div className="font-xs text-small-caps mr-2">
                            <input className="mr-1" type="checkbox" />
                            <span>blue</span>
                        </div>
                        <div className="font-xs text-small-caps">
                            <input className="mr-1" type="checkbox" />
                            <span>purple</span>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-center min-h-1 px-2 border-r-2">
                    <span className="text-xs font-bold mr-1">
                        connections / ports
                    </span>
                    <div className="flex">
                        <div className="font-xs text-small-caps mr-2">
                            <input className="mr-1" type="checkbox" />
                            <span>wired + wireless</span>
                        </div>
                        <div className="font-xs text-small-caps mr-2">
                            <input className="mr-1" type="checkbox" />
                            <span>wired only</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 lg: grid-cols-4 gap-8 p-4 sm:ml-64">
                {products.length === 0 && "Select a size to get started"}
                {products &&
                    products.map((p) => (
                        <ProductCard
                            key={p.full_title}
                            product={p}
                            onClick={() => {}}
                            // onClick={() => {
                            //     setHighlightedProduct(p);
                            //     setModalOpen(true);
                            // }}
                        />
                    ))}
            </div>{" "}
        </div>
    );
};

export default KeyboardPicker;
