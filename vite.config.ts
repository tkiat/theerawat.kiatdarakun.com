import reactRefresh from "@vitejs/plugin-react-refresh"
import path from "path"
import {defineConfig} from "vite"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  plugins: [reactRefresh(), svgr()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/App"),
      "@assets": path.resolve(__dirname, "./src/App/assets"),
    },
  },
})
