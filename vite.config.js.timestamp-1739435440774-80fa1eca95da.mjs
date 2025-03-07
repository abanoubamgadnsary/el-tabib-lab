// vite.config.js
import { defineConfig } from "file:///D:/Web%20Dev/Lab%20site/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Web%20Dev/Lab%20site/node_modules/@vitejs/plugin-react/dist/index.mjs";
import eslint from "file:///D:/Web%20Dev/Lab%20site/node_modules/vite-plugin-eslint/dist/index.mjs";
import tailwindcss from "file:///D:/Web%20Dev/Lab%20site/node_modules/@tailwindcss/vite/dist/index.mjs";
var vite_config_default = defineConfig({
  base: "./",
  // Relative path
  build: {
    outDir: "dist"
  },
  plugins: [react(), eslint(), tailwindcss()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXZWIgRGV2XFxcXExhYiBzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxXZWIgRGV2XFxcXExhYiBzaXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9XZWIlMjBEZXYvTGFiJTIwc2l0ZS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgZXNsaW50IGZyb20gXCJ2aXRlLXBsdWdpbi1lc2xpbnRcIjtcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwiQHRhaWx3aW5kY3NzL3ZpdGVcIjtcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogXCIuL1wiLCAvLyBSZWxhdGl2ZSBwYXRoXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcImRpc3RcIixcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCksIGVzbGludCgpLCB0YWlsd2luZGNzcygpXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUCxTQUFTLG9CQUFvQjtBQUNsUixPQUFPLFdBQVc7QUFDbEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8saUJBQWlCO0FBRXhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLFlBQVksQ0FBQztBQUM1QyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
