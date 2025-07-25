import fs from 'fs/promises';
//Not required to async-await, but it is a good practice to use promises for file operations in Node.js.
let a = await fs.readFile('faijan2.txt')
let b = await fs.appendFile("faijan2.txt", "\n\n\nThis is amazing promise");
console.log(a.toString(), b);

