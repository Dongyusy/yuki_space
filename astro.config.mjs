import { defineConfig } from "astro/config";

const site = "https://dongyusy.github.io";
const base = "/yuki_space";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site,
  base,
  outDir: "docs",
});
