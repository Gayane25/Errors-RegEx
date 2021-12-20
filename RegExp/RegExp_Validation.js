'use strict';
/*
Create a RegExp myRegExp to test if a string is a valid pin or not. A valid pin has:
Exactly 4 or 6 characters.
Only numerical characters (0-9).
No whitespace.*/

let myRegExp = ' 4983';

console.log(/(^(\d{4})$)|^(\d{6}$)/.test(myRegExp));
