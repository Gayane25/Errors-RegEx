# Regex

### Task

- Pass [following tutorial](https://regexone.com/lesson/whitespaces) and convert all the codes into js with usage.
  _Note_, You can do it in one file.
- Create a RegExp `myRegExp` to test if a string is a valid pin or not. A valid pin has:
- Exactly 4 or 6 characters.
- Only numerical characters (0-9).
- No whitespace.

| **Input**               | **Output** |
| :---------------------- | :--------- |
| myRegExp.test("1234")   | true       |
| myRegExp.test("45135")  | false      |
| myRegExp.test("89abc1") | false      |
| myRegExp.test("900876") | true       |
| myRegExp.test(" 4983")  | false      |

[solution](https://github.com/Gayane25/Lesson011-Errors-RegEx/blob/master/RegExp/RegExp_Validation.js)

-

```
const REGEXP = /abc/;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
str.match(REGEXP);
'<a href="/">', '<input type="radio" checked>', "<b>";
```

[solution](https://github.com/Gayane25/Lesson011-Errors-RegEx/blob/master/RegExp/RegExp2.js)
