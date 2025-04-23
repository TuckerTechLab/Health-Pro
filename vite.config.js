import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        microCommitment: resolve(__dirname, "src/micro-commitment.html"),
        healthPlan: resolve(__dirname, "src/health-plan.html"),
        freeQuote: resolve(__dirname, "src/free-quote.html"),
        disqualify: resolve(__dirname, "src/disqualify.html"),
        qualification: resolve(__dirname, "src/qualification.html"),
        confirmation: resolve(__dirname, "src/confirmation.html"),
        requestCall: resolve(__dirname, "src/request-call.html"),
      }
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  base: "./" // Ensures relative paths for assets
});
