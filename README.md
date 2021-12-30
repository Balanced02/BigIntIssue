## Replicating Issue with BigInteger on android

### Problem
Using BigInteger on android on either release build or without debugging mode enabled, the type of data returned is `object` but with debugger, the data type is `bigint`.

Using `BigInt` on iOS returns `bigint` data on either of the environments.

### Solutions tried
- [Big Integer](https://www.npmjs.com/package/big-integer)
- [Github comment](https://github.com/facebook/react-native/issues/28492#issuecomment-824698934)
- [Decimal](https://www.npmjs.com/package/decimal.js)
- [Big Number](https://www.npmjs.com/package/bignumber.js)
- [Big Js](https://www.npmjs.com/package/bigjs)

### Find screenshots below for data type returned on both android and iOS

#### Without Debugger

- Android without debugger

  ![Android without debugger](images/android1.png?raw=true 'IOS without Debugger')

  Data returned here is of type `object` instead of `bigint`

- iOS without debugger

![iOS without debugger](images/iOS1.png?raw=true 'IOS without Debugger')

#### With Debugger

- Android with debugger

![Android with debugger](images/android2.png?raw=true 'IOS with Debugger')

  Data returned here is of type `bigint` as expected

- iOS with debugger

![iOS with debugger](images/iOS2.png?raw=true 'IOS with Debugger')


### Running the application
- npm i
- npm run android
  
  `Toggle developer menu to see the data type returned on each mode.`