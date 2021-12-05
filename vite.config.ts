import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import {defineConfig} from 'vite'
import svgr from 'vite-plugin-svgr'

const pathAssets = path.resolve(__dirname, './assets')
const pathSrc = path.resolve(__dirname, './src')

export default defineConfig({
  // build: {
  // minify: false,
  //     rollupOptions: {
  //     }
  // },
  plugins: [reactRefresh(), svgr()],
  resolve: {
    alias: {
      assets: pathAssets,
      src: pathSrc,
    },
  },
})
