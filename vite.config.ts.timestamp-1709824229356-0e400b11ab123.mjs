// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import Components from "file:///Users/xujialiang/Desktop/Dev/gitee/internlm-demo/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///Users/xujialiang/Desktop/Dev/gitee/internlm-demo/node_modules/@vant/auto-import-resolver/dist/index.esm.mjs";
import { defineConfig } from "file:///Users/xujialiang/Desktop/Dev/gitee/internlm-demo/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/xujialiang/Desktop/Dev/gitee/internlm-demo/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/xujialiang/Desktop/Dev/gitee/internlm-demo/vite.config.ts";
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tagName) => {
            return tagName === "vue-advanced-chat" || tagName === "emoji-picker";
          }
        }
      }
    }),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveHVqaWFsaWFuZy9EZXNrdG9wL0Rldi9naXRlZS9pbnRlcm5sbS1kZW1vXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveHVqaWFsaWFuZy9EZXNrdG9wL0Rldi9naXRlZS9pbnRlcm5sbS1kZW1vL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy94dWppYWxpYW5nL0Rlc2t0b3AvRGV2L2dpdGVlL2ludGVybmxtLWRlbW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IHsgVmFudFJlc29sdmVyIH0gZnJvbSAnQHZhbnQvYXV0by1pbXBvcnQtcmVzb2x2ZXInO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBcIi4vXCIsXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoe1xuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgLy8gdHJlYXQgYWxsIHRhZ3Mgd2l0aCBhIGRhc2ggYXMgY3VzdG9tIGVsZW1lbnRzXG4gICAgICAgICAgaXNDdXN0b21FbGVtZW50OiAodGFnTmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICd2dWUtYWR2YW5jZWQtY2hhdCcgfHwgdGFnTmFtZSA9PT0gJ2Vtb2ppLXBpY2tlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUyxlQUFlLFdBQVc7QUFDeFcsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxvQkFBb0I7QUFFN0IsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBTDBMLElBQU0sMkNBQTJDO0FBUTNQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFVBQVU7QUFBQSxRQUNSLGlCQUFpQjtBQUFBO0FBQUEsVUFFZixpQkFBaUIsQ0FBQyxZQUFZO0FBQzVCLG1CQUFPLFlBQVksdUJBQXVCLFlBQVk7QUFBQSxVQUN4RDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsSUFDNUIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
