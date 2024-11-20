const {getDefaultConfig: getExpoDefaultConfig} = require('@expo/metro-config');
const {getDefaultConfig: getReactNativeDefaultConfig} = require('@react-native/metro-config');

const {mergeConfig} = require('@react-native/metro-config');
require('dotenv').config();

const defaultConfig = getReactNativeDefaultConfig(__dirname);
const expoConfig = getExpoDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
};

module.exports = mergeConfig(defaultConfig, expoConfig, config);
