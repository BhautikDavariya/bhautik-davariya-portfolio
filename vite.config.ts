import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/bhautik-davariya-portfolio/',
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));



// import { defineConfig, Plugin } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// // import { createServer } from "./server";

// // changes
// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   // base: '/bhautik-davariya-portfolio/',
//   // server: {
//   //   host: "::",
//   //   port: 8080,
//   // },
//   build: {
//     outDir: "dist",
//   },
//   // plugins: [react(), expressPlugin()],
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./client"),
//       "@shared": path.resolve(__dirname, "./shared"),
//     },
//   },
// }));

// // function expressPlugin(): Plugin {
// //   return {
// //     name: "express-plugin",
// //     apply: "serve", // Only apply during development (serve mode)
// //     configureServer(server) {
// //       const app = createServer();

// //       // Add Express app as middleware to Vite dev server
// //       server.middlewares.use(app);
// //     },
// //   };
// // }
