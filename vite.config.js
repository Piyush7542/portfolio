import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
          animations: ['framer-motion']
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`
          }
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        }
      }
    },
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false
    }
  },
  server: {
    port: 3000,
    open: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
    treeShaking: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', 'framer-motion']
  }
})