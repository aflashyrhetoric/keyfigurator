import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

const path = require('path')

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
        "types/views": path.resolve(__dirname, "types","views.ts")
    }
   }
});
