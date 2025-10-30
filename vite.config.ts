import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Sitemap from 'vite-plugin-sitemap';
// @ts-ignore - JavaScript module for route extraction
import { extractRoutes } from './extract-routes.js';

// استخراج المسارات من App.tsx
const routes = extractRoutes({
  routeFilePath: 'src/App.tsx',
  excludeList: ['/', '*'],
  excludeDynamic: true
});

export default defineConfig(({ mode }) => ({
  // 🔧 هذا السطر هو المفتاح لعمل الموقع على GitHub Pages
  base: "/CV/",

  server: {
    host: "::",
    port: 8080
  },

  plugins: [
    react(),
    Sitemap({
      // 🔧 استخدم رابط موقعك الحقيقي بدل الرابط التجريبي
      hostname: "https://mohammedkul.github.io/CV",
      dynamicRoutes: routes
    })
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
}));