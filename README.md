# react-native-japanese-ocr

A React-Native package for preforming OCR on Japanese text using Google MLKit TextRecognition v2

### CURRENTLY ONLY ANDROID IS SUPPORTED


## Installation

```sh
npm install @NguyenTrongDuc256/react-native-japanese-ocr
```
```sh
yarn add @NguyenTrongDuc256/react-native-japanese-ocr
```

## Usage

```js
import { ocr } from "react-native-japanese-ocr";

// ...

const result = await ocr(path).then(response => ...);
```

```js
import { ocrFromURL } from "react-native-japanese-ocr";

// ...

const result = await ocrFromURL(url).then(response => ...);
```

### Uses Google MLKit TextRecognition v2
[documentation](https://developers.google.com/ml-kit/vision/text-recognition/v2)

## License

MIT
