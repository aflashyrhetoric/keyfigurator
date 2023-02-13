import { useEffect, useState } from "react";

import { Keyboard } from "types/keyboard";
import KeyboardPicker from "views/KeyboardPicker";
// import SwitchPicker from "views/SwitchPicker";
import { View } from "types/views";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useSelector } from "react-redux";
import { applyPreferenceFilter } from "src/shared/products";
// import { applyPreferenceFilter } from "src/shared/products";

export default function Configurator({ products, auth, errors }) {
    const [activeView, setActiveView] = useState(View.KeyboardPicker);

    const preferences = useSelector((state) => state.preferences);
    const {
        size,
        compatible_oses,
        interfaces,
        frame_color,
        primary_led_color,
        switch_type,
    } = preferences;
    // console.log(preferences["size"]);

    const filteredProducts = Object.keys(preferences).reduce(
        (acc, preferenceKey) => {
            // console.log(
            //     preferenceKey,
            //     applyPreferenceFilter(
            //         acc,
            //         preferenceKey,
            //         preferences[preferenceKey]
            //     )
            // );
            return applyPreferenceFilter(
                acc,
                preferenceKey,
                preferences[preferenceKey]
            );
        },
        products
    );

    const sharedProps = {
        products: filteredProducts,
        navigate: setActiveView,
        prefs: preferences,
    };

    const viewMap = {
        // [View.KeyboardPicker]: <p>hi</p>,
        [View.KeyboardPicker]: <KeyboardPicker {...sharedProps} />,
        // [View.SwitchPicker]: <SwitchPicker {...sharedProps} />,
        // [View.KeycapPicker]: <KeyboardPicker products={products} />,
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            activePanel={activeView}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         Configurator
            //     </h2>
            // }
        >
            <Head title="Dashboard" />
            {viewMap[activeView]}
        </AuthenticatedLayout>
    );
}
