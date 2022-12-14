const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  base: '/ZLand/',
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 4201,
    hot: true,
  },
};
