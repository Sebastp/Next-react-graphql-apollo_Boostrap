module.exports = {
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  preset: "ts-jest",
  
  testEnvironment: "node",
  globals: {
    jsx: "react",
    "ts-jest": {
      "tsConfig": "tsconfig.jest.json"
    }
  },
  setupFiles: [
    "<rootDir>/tests/test-setup.ts"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
  moduleNameMapper: {
    "~graphql/(.*)": "<rootDir>/graphql/$1",
    "~graphqlQ/(.*)": "<rootDir>/graphql/queries/$1",
    "~graphqlM/(.*)": "<rootDir>/graphql/mutations/$1",
    "~views/(.*)": "<rootDir>/views/$1",
    "~viewsUi/(.*)": "<rootDir>/views/ui/$1",
    "~viewsComp/(.*)": "<rootDir>/views/components/$1",
    "~viewsLay/(.*)": "<rootDir>/views/layouts/$1",
    "~styles/(.*)": "<rootDir>/styles/$1",
    "~lib/(.*)": "<rootDir>/lib/$1",
    "~assets/(.*)": "<rootDir>/assets/$1",
    "~styles/(.*)": "<rootDir>/styles/$1",
    "~static/(.*)": "<rootDir>/public/static/$1"
  }
} 

