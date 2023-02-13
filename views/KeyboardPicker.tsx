import { useState } from "react";
import { Modal } from "carbon-components-react";
import ProductCard from "src/configurator/ProductCard";
import PageContent from "templates/page-content";
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
        <div className="grid grid-cols-3 gap-8 p-4 sm:ml-64">
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
        </div>
    );
};

export default KeyboardPicker;
