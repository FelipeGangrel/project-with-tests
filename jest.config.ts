import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>/src"],
  modulePaths: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  resetMocks: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!src/mocks/**"],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ["./config/jest/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "@swc/jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
