const { withEsbuildOverride } = require("remix-esbuild-override");

const GlobalsPolyfills =
  require("@esbuild-plugins/node-globals-polyfill").default;

NodeModulesPolyfills =
  require("@esbuild-plugins/node-modules-polyfill").default;

/**
 * Define callbacks for the arguments of withEsbuildOverride.
 * @param option - Default configuration values defined by the remix compiler
 * @param isServer - True for server compilation, false for browser compilation
 * @param isDev - True during development.
 * @return {EsbuildOption} - You must return the updated option
 */
withEsbuildOverride((option, { isServer, isDev }) => {
  option.plugins = [
    GlobalsPolyfills({ buffer: true }),
    NodeModulesPolyfills(),
    ...option.plugins,
  ];
  return option;
});

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
