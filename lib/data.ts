import { Image } from "react-native";

const image1 = require('../assets/samples/image-1.jpg');
const image2 = require('../assets/samples/image-2.jpg');
const image3 = require('../assets/samples/image-3.jpg');
const image4 = require('../assets/samples/image-4.jpg');
const image5 = require('../assets/samples/image-5.jpg');
const image6 = require('../assets/samples/image-6.jpg');
const image7 = require('../assets/samples/image-7.jpg');
const image8 = require('../assets/samples/image-8.jpg');
const image9 = require('../assets/samples/image-9.jpg');
const image10 = require('../assets/samples/image-10.jpg');


export const imageData = [
  { id: '1', source: image1, ...Image.resolveAssetSource(image1), title: 'Bost rising'},
  { id: '2', source: image2, ...Image.resolveAssetSource(image2), title: ''},
  { id: '3', source: image3, ...Image.resolveAssetSource(image3), title: ''},
  { id: '4', source: image4, ...Image.resolveAssetSource(image4), title: ''},
  { id: '5', source: image5, ...Image.resolveAssetSource(image5), title: ''},
  { id: '6', source: image6, ...Image.resolveAssetSource(image6), title: ''},
  { id: '7', source: image7, ...Image.resolveAssetSource(image7), title: ''},
  { id: '8', source: image8, ...Image.resolveAssetSource(image8), title: ''},
  { id: '9', source: image9, ...Image.resolveAssetSource(image9), title: ''},
  { id: '10', source: image10, ...Image.resolveAssetSource(image10), title: ''},
];