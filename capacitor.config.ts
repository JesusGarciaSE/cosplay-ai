import "dotenv/config";
import type { CapacitorConfig } from "@capacitor/cli";

const appName = process.env.VITE_APP_NAME || "cosplay.ai";

const config: CapacitorConfig = {
  appId: "com.cosplayai.app",
  appName,
  webDir: "dist",
};

export default config;
