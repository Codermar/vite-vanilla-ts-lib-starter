// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageName = require("./package-name.json");

const getPackageName = () => {
  return packageName.name;
};

const config = {
  entries: [
    {
      filePath: "./src/index.ts",
      outFile: `./dist/${getPackageName()}.d.ts`,
      noCheck: false,
    },
  ],
};

module.exports = config;
