module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
    "\\.(css|scss|sass|less)$": "<rootDir>/mocks/styleMock.js",
  },
  modulePathIgnorePatterns: ["node_modules/"],
};
