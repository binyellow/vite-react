import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
import path from "path";
import fs from "fs";
import lessToJS from "less-vars-to-js";
import config from "./config/index";

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, "./config/variables.less"), "utf8"));

const env = process.argv[process.argv.length - 1];
const base = config[env];

// https://vitejs.dev/config/
export default defineConfig({
  base: base.cdn,
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => {
            if (name === "col" || name === "row") {
              return "antd/lib/style/index.less";
            }
            return `antd/es/${name}/style/index.less`;
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables,
      },
    },
  },
  server: {
    port: 3008,
    proxy: {
      // '/api': {
      //   target: 'http://47.99.134.126:28019/api/v1',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/api/, '')
      // }
    },
  },
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "./"),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      { find: /^~/, replacement: "" },
    ],
  },
});
