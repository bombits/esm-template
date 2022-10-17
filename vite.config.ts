import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir : resolve(__dirname, 'lib'),
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src'),
      name: 'index.jsx',
      // the proper extensions will be added
      fileName: 'index'
    },
    minify: true
  }
})
