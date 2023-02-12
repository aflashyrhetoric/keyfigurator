import { useEffect, useState } from "react";

import { Keyboard } from "types/keyboard";
import KeyboardPicker from "views/KeyboardPicker";
// import SwitchPicker from "views/SwitchPicker";
import { View } from "types/views";
// import { applyPreferenceFilter } from "src/shared/products";

export default function Configurator({ products }) {
    const [activeView, setActiveView] = useState(View.KeyboardPicker);

    const sharedProps = {
        products,
        navigate: setActiveView,
        // prefs,
    };

    const viewMap = {
        // [View.KeyboardPicker]: <p>hi</p>,
        [View.KeyboardPicker]: <KeyboardPicker {...sharedProps} />,
        // [View.SwitchPicker]: <SwitchPicker {...sharedProps} />,
        // [View.KeycapPicker]: <KeyboardPicker products={products} />,
    };

    // return <>{JSON.stringify(products, null, 2)}</>;
    return <>{viewMap[activeView]}</>;
}
