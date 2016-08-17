# us-area-codes

> Area Codes for USA, Canada, and surrounding territories.

## Install

```
$ npm install --save us-area-codes
```

## Usage

```js
const usAreaCodes = require('us-area-codes');

usAreaCodes(210);
//=> Texas
```


## API

### usAreaCodes(input)

#### input

Type: `number`

Returns the corresponding state or territory.

## CLI

```
$ npm install --global us-area-codes
```

```
$ us-area-codes --help

  Usage
    us-area-codes [input]

  Examples
    $ us-area-codes 210
    Texas
```


## License

MIT © [Mike McBride](http://mmcbride1007.github.io)
