## Replicating Issue with BigInteger on android

### Problem
Using BigInteger without debugging mode enabled, the type of data returned is `object` but with debugger, the data type is `bigint`.

This works fine on `iOS`

### Solutions tried
- (Big Integer)[https://www.npmjs.com/package/big-integer]
- (Github comment)[https://github.com/facebook/react-native/issues/28492#issuecomment-824698934]
- (Decimal)[https://www.npmjs.com/package/decimal.js]
- (Big Number)[https://www.npmjs.com/package/bignumber.js]
- (Big Js)[https://www.npmjs.com/package/bignumber.js]

### Find screenshots below for both android and iOS

#### With Debugger

- iOS with debugger
![iOS with debugger](images/iOS2.png?raw=true 'IOS with Debugger')

- Android with debugger
![Android with debugger](images/android2.png?raw=true 'IOS with Debugger')

#### Without Debugger

- iOS without debugger

![iOS without debugger](images/iOS1.png?raw=true 'IOS without Debugger')

- Android without debugger
![Android without debugger](images/iOS2.png?raw=true 'IOS without Debugger')