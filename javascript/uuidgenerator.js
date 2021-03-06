/*eslint quotes: ["error", "single"]*/
/*eslint-env es6*/

// npm install uuid

/* ----------------------------------- */
/* ----------------------------------- */

// using version 4 to create uuid
// generates a random uuid

const { v4: uuidv4, v5: uuidv5 } = require('uuid');
console.log(uuidv4());

// output
// da8f5839-63f0-4c25-a7b1-a0172a03904b

/* ----------------------------------- */
/* ----------------------------------- */

// here we use only v4,
// to use v5 uncomment it using ctrl + /
// using version 5 to create uuid
// generates a random uuid

const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
console.log(uuidv5('Hello, World!', MY_NAMESPACE));

// output
// 53508957-8e61-44d6-97e2-db4e5b8947f3

