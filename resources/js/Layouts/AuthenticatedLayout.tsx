import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import ApplicationChrome from "./ApplicationChrome";

export default function Authenticated({ auth, header, children, activePanel }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <ApplicationChrome activePanel={activePanel} />

            <main className="pt-14">{children}</main>
        </div>
    );
}
