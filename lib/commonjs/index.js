"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ocr = ocr;
exports.ocrFromURL = ocrFromURL;

var _reactNative = require("react-native");

const LINKING_ERROR = `The package 'react-native-japanese-ocr' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const JapaneseOcr = _reactNative.NativeModules.JapaneseOcr ? _reactNative.NativeModules.JapaneseOcr : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }

});

function ocr(path) {
  return JapaneseOcr.ocr(path);
}

function ocrFromURL(path) {
  return JapaneseOcr.ocrFromURL(path);
}
//# sourceMappingURL=index.js.map