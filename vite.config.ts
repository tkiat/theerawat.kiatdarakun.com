import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import {defineConfig} from 'vite'
import svgr from 'vite-plugin-svgr'

const pathAssets = path.resolve(__dirname, './src/App/assets')
const pathComponent = path.resolve(__dirname, './src/App/component')
const pathShare = path.resolve(__dirname, './src/App/share')
const pathSrc = path.resolve(__dirname, './src')

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  plugins: [reactRefresh(), svgr()],
  resolve: {
    alias: {
      "@assets": pathAssets,
      '@component': pathComponent,
      "@share": pathShare,
      src: pathSrc,
    },
  },
})
