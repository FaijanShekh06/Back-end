import path from "path";

let myPath = "F:\\Faijans Folder\\Back-End\\faijan.txt"
//display the extension of the file
console.log(path.extname(myPath));
//display the base name of the file
console.log(path.basename(myPath));
//display the directory name of the file
console.log(path.dirname(myPath));

//joning paths
console.log(path.join("F:/", "program\\faijan.txt"));
