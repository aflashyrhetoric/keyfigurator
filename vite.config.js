import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

const path = require("path");

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.tsx",
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            views: path.resolve(__dirname, "views"),
            src: path.resolve(__dirname, "src"),
            "types/views": path.resolve(__dirname, "types", "views.ts"),
        },
    },
});
