# React Lorem component
> A react component that renders lorem ipsum text.

### Demo
```javascript
<div>
    <Lorem />
    <Lorem reps={{ times: 4, lineBreak: true }} color={'yellow'} fontSize={'medium'} />
    <Lorem color={'blue'} fontSize={30} />
    <Lorem color={'rgb(154,67,123)'} fontSize={'large'} />
</div>
```

results to...

[![https://gyazo.com/3a4a40b15c50f0f079fe701bb2a301c7](https://i.gyazo.com/3a4a40b15c50f0f079fe701bb2a301c7.gif)](https://gyazo.com/3a4a40b15c50f0f079fe701bb2a301c7)
  
### Installation
[![https://nodei.co/npm/react-lorem.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/react-lorem.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-lorem) [![NPM](https://nodei.co/npm-dl/react-lorem.png?months=6&height=2)](https://nodei.co/npm/react-lorem.js)

### Properties

| Property |      Description      |      Type     | Required |
|----------|:---------------------:|:-------------:|:--------:|
| reps     | amount of repetitions |     shape     |    NO    |
| color    |       text color      |     string    |    NO    |
| fontSize |       font size       | string/number |    NO    |

### Usage

```javascript
import React from 'react';
import Lorem from 'react-lorem/Lorem.jsx';

render(
  <div>
    <Lorem />
    <Lorem reps={{ times: 4, lineBreak: true }} color={'#FFAADD'} fontSize={'small'} />
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

