import type { TestUserConfig, ViteUserConfig } from 'vitest/config';
import { defineConfig } from "vitest/config";

type VitestConfig = ViteUserConfig & {
  test?: TestUserConfig;
};

const config: VitestConfig = {
  test: {
    exclude: ['dist/**', 'node_modules/**']
  }
};

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
  },
});