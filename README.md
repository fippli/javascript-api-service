# @fippli/api-utils
API tools for JavaScript projects

## Installation
```javascript
npm install @fippli/api-utils
```

## Basic usage
Make `GET` request to `http://www.example.com:3000/some/endpoint`
```javascript
import { GET } from '@fippli/api-utils';

const callback = (data) => {
  console.log("This is my api data", data);
};

const enpoint = '/some/endpoint';

const options = {
  port: 3000,
  host: 'www.example.com',
}

GET(callback, endpoint, options);
```



## NOTE
This is a work in progress and might be unstable.