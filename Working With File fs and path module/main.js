import fs from 'fs';


console.log(fs);

console.log("Starting to write to a file...");
// fs.writeFileSync("faijan.txt", "Hello Faijan");

//use fs.writeFile to write asynchronously
fs.writeFile("faijan2.txt", " Faijan is a smart boy!", () => {
  console.log("File written successfully!");
  // Read the file asynchronously
  fs.readFile("faijan2.txt", (err, data) => {
    console.log(err, data.toString());

  });
});

fs.appendFile("faijan.txt", " FaijanB2", (e, d) => {
  console.log(d);

})
// console.log("File written successfully!");
