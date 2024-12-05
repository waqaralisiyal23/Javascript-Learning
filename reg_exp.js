/*
What Is a Regular Expression?
A regular expression is a sequence of characters that forms a search pattern.
When you search for data in a text, you can use this search pattern to describe what you are searching for.
A regular expression can be a single character, or a more complicated pattern.
Regular expressions can be used to perform all types of text search and text replace operations.

Syntax
/pattern/modifiers;
Example
/w3schools/i;

Example explained:
/w3schools/i  is a regular expression.
w3schools  is a pattern (to be used in a search).
i  is a modifier (modifies the search to be case-insensitive).

Using String Methods
In JavaScript, regular expressions are often used with the two string methods: search() and replace().
The search() method uses an expression to search for a match, and returns the position of the match.
The replace() method returns a modified string where the pattern is replaced.

Modifiers can be used to perform case-insensitive more global searches:

Modifier    Description
i	       Perform case-insensitive matching
g	       Perform a global match (find all)
m	       Perform multiline matching
d	       Perform start and end matching (New in ES2022)

Regular Expression Patterns
Brackets are used to find a range of characters:
Expression      Description
[abc]	        Find any of the characters between the brackets
[0-9]	        Find any of the digits between the brackets
(x|y)	        Find any of the alternatives separated with |

Metacharacters are characters with a special meaning:

Metacharacter	Description
\d	            Find a digit
\s	            Find a whitespace character
\b	            Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
\uxxxx	        Find the Unicode character specified by the hexadecimal number xxxx

Quantifiers define quantities:

Quantifier	    Description
n+	           Matches any string that contains at least one n
n*	           Matches any string that contains zero or more occurrences of n
n?	           Matches any string that contains zero or one occurrences of n
*/

let text = "Visit W3Schools!";
let n = text.search("W3Schools");
console.log(n);    // 6
let n2 = text.search(/w3schools/i);
console.log(n2);    // 6

text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
console.log(result);    // Visit W3Schools!
let result2 = text.replace(/microsoft/i, "W3Schools");
console.log(result2);    // Visit W3Schools!

text = "The best things in life are free!";
// It searches a string for a pattern, and returns true or false, depending on the result.
const pattern = /e/;
console.log(pattern.test(text));    // true

// It searches a string for a specified pattern, and returns the found text as an object.
// If no match is found, it returns an empty (null) object.
console.log(pattern.exec(text));
console.log(/z/.exec(text));    // null
