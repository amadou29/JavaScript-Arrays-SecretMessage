let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); //remove last word in array
secretMessage.push('to', 'Program'); // Adding 'to' & 'program' to the end of the arrays
secretMessage[7] = 'right'; // replacing whatever number 7 was with the string 'right'
secretMessage.shift(); //removing the first string of the array
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know');

console.log(secretMessage);
console.log(secretMessage.length);
console.log(secretMessage.join());