module.exports = function (api) {
    api.cache(true);
    return {
      presets: ["babel-preset-expo"], // This is required for Expo projects
      plugins: ["nativewind/babel"], // Adding the NativeWind Babel plugin
    };
  };
  