# simple-vrt
This is a very simple visual regression testing library.
You can place an image of the expected display in any directory and run this test to test if it is as expected.
Usage is as follows.

## Usage
1. create a file named simple-vrt.config.mjs in the root of your project.
2. Write the configuration as follows:
```javascript
// simple-vrt.config.mjs
export default {
  expectedImagePath: './simple-vrt/img/expect.png', // expected image directory
  actualImagePath: './simple-vrt/img/actual.png', // directory of actual image
  diffImagePath: './simple-vrt/img/diff.png', // directory of diff image
  targetUrl: 'http://localhost:3000', // URL of the test target
  viewport: { // screen size of the test target
    width: 1920,
    height: 1080, 
  }
}
```
3. add the image to the directory of the expected image.
4. add the following command to package.json.
```json
{
  "scripts": {
    "simple-vrt": "simple-vrt"
  }
}
```
5. execute the following command.
``` bash
$ npm run simple-vrt
```
