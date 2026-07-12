import { defineConfig } from "astro/config";

const site = "https://yukiyuan.cn";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site,
});
