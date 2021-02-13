module.exports = {
  clearMocks: true,
  verbose: true,
  moduleNameMapper: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttfs|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
    "\\.(css|scss|sass|less)$": "<rootDir>/mocks/styleMock.js",
  },
  modulePathIgnorePatterns: ["node_modules/"],
  setupFiles: ["<rootDir>/jest-setup.js"],
};
