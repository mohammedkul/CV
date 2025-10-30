import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Sitemap from 'vite-plugin-sitemap';
// @ts-ignore - JavaScript module for route extraction
import { extractRoutes } from './extract-routes.js';

// 从 App.tsx 中自动提取路由
const routes = extractRoutes({
  routeFilePath: 'src/App.tsx', // Route file path
  excludeList: ['/', '*'], // Exclude routes ('/' is automatically scanned by the plugin)
  excludeDynamic: true // Exclude dynamic routes (routes containing :)
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // استخدم مسارات نسبية عند البناء لتجنّب imports المطلقة التي تكسر Rollup.
  // عند التطوير يبقى '/' لراحة التيرمينال المحلي.
  base: mode === 'development' ? '/' : './',
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
  react(),
  Sitemap({ hostname: "https://mohammedkul.github.io/CV", dynamicRoutes: routes })],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
}));