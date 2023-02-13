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
import { KeyboardFrameColors } from "types/keyboard";
import UIShellPage from "templates/page-uishell";
import KeyboardParameters from "src/configurator/parameters/KeyboardParameters";
import { PickerProps } from "types/app";
import { userPreferencesToTags } from "src/shared/products";
import { useDispatch, useSelector } from "react-redux";

const KeyboardPicker = ({ products, navigate, prefs }: PickerProps) => {
    // const [highlightedProduct, setHighlightedProduct] =
    // useState<Keyboard>(null);
    // const productIsHighlighted = highlightedProduct !== null;

    // const [modalOpen, setModalOpen] = useState(false);
    const {
        size,
        compatible_oses,
        interfaces,
        frame_color,
        primary_led_color,
        switch_type,
    } = prefs;
    const dispatch = useDispatch();

    // const resetState = () => {
    //     setHighlightedProduct(null);
    //     setModalOpen(false);
    // };
    // return "hi";

    return (
        <div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 p-4 sm:ml-64">
                {products.length === 0 && (
                    <div className="flex items-center justify-center">
                        <p className="font-italic">
                            Select a size to get started
                        </p>
                    </div>
                )}
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
