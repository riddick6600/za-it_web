import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // open: "http://0.0.0.0:80",
    host: "0.0.0.0",
    port: 80,
  },
  publicDir: "public",
  resolve: {
    alias: {
      "@abi": path.resolve(__dirname, "src/abi"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@types": path.resolve(__dirname, "src/types"),
      "@public": path.resolve(__dirname, "src/public"),
    },
  },
});
