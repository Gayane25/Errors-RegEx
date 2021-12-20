'use strict';
/*const REGEXP = /abc/;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
str.match(REGEXP);
'<a href="/">', '<input type="radio" checked>', "<b>"; */

let str = '<> <a href="/"> <input type="radio" checked> <b>';
console.log(str.match(/[^'<>'].*/));
