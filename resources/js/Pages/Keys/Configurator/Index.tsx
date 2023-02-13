import { useEffect, useState } from "react";

import { Keyboard } from "types/keyboard";
import KeyboardPicker from "views/KeyboardPicker";
// import SwitchPicker from "views/SwitchPicker";
import { View } from "types/views";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
// import { applyPreferenceFilter } from "src/shared/products";

export default function Configurator({ products, auth, errors }) {
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

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
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
