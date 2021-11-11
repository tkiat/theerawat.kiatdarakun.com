module.exports = {
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.json"
    }
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "moduleNameMapper": {
    "^src/(.*)": "<rootDir>/src/$1"
  },
//   setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
//   testEnvironment: 'jsdom',
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testMatch": [
    "**/src/**/*.test.+(ts|tsx)"
  ]
}
