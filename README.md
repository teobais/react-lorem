# React Lorem component
> A react component that renders lorem ipsum text.

#### Features
- ES6
- Webpack
- Babel

### Installation
[![https://nodei.co/npm/react-lorem.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/react-lorem.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-lorem) [![NPM](https://nodei.co/npm-dl/react-lorem.png?months=6&height=2)](https://nodei.co/npm/react-lorem.js)

### Properties

| Property |      Description      |      Type     | Required |
|----------|:---------------------:|:-------------:|:--------:|
| times    | amount of repetitions |     number    |    NO    |
| color    |       text color      |     string    |    NO    |
| fontSize |       font size       | string/number |    NO    |

### Usage

```javascript
import React from 'react';
import Lorem from 'react-lorem/Lorem.jsx';

render(
  <div>
    <Lorem times={2} color={'#FFAADD'} fontSize={'small'} />
    <Lorem color={'blue'} fontSize={30} />
    <Lorem color={'rgb(154,67,123)'} fontSize={'large'} />
  </div>,
  document.getElementById('root')
);
```


### Example

```
npm install
npm start
Open http://localhost:4000
```

### Linting

ESLint with React linting options have been enabled.

```
npm run lint
```

### Credits
Big thanks to [react-es6-webpack-boilerplate](https://github.com/vasanthk/react-es6-webpack-boilerplate), which provided the base of this project and of course gave me the chance to have a very first viewing on the latest front-end configurations.

