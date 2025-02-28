// vite.config.ts

import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const versions = {
    chrome: '90',
}

export default defineConfig({
    build: {
        target: `chrome${versions.chrome}`,
    },
    plugins: [
    react(),
    tsconfigPaths()
    ],
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            }
        }
    },
    envPrefix: 'REACT_APP_',
    define: {
        global: {},
    }
})
