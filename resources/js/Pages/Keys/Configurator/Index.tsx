import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Keyboard } from "types/keyboard";
import KeyboardPicker from "views/KeyboardPicker";
import SwitchPicker from "views/SwitchPicker";
import { View } from "types/views";
import { applyPreferenceFilter } from "src/shared/products";

export default function Configurator({ uploadedState }) {
    // const [
    //   productsFilteredByMultipleSelect,
    //   setProductsFilteredByMultipleSelect,
    // ] = useState<Keyboard[]>([])
    const [products, setProducts] = useState<Keyboard[]>([]);
    const [activeView, setActiveView] = useState(View.KeyboardPicker);

    // const prefs = useSelector((state) => state.preferences);

    // useEffect(() => {
    //     const setProductData = async () => {
    //         // const questions = getQuestions()
    //         const response = await loadProductData();
    //         const rawData = response.data;

    //         const allProducts = rawData ? rawData.map(parseObject) : [];

    //         const products = Object.keys(prefs).reduce(
    //             (acc, preferenceKey) =>
    //                 applyPreferenceFilter(
    //                     acc,
    //                     preferenceKey,
    //                     prefs[preferenceKey]
    //                 ),
    //             allProducts
    //         );

    //         setProducts(products);
    //     };

    //     setProductData();
    // }, [prefs]);

    const sharedProps = {
        products,
        navigate: setActiveView,
        // prefs,
    };

    const viewMap = {
        [View.KeyboardPicker]: <p>hi</p>,
        // [View.KeyboardPicker]: <KeyboardPicker {...sharedProps} />,
        // [View.SwitchPicker]: <SwitchPicker {...sharedProps} />,
        // [View.KeycapPicker]: <KeyboardPicker products={products} />,
    };

    return <>{uploadedState}</>;
    // <>{viewMap[activeView]}</>
}
