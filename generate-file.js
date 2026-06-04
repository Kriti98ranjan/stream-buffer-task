const fs = require("fs"); 
const path = require("path"); 
const filePath = "testfile.txt"; 
const targetSize = 50 * 1024 * 1024; 
const chunk = "HelloWorld1234567890".repeat(50) + "\n"; 
const writer = fs.createWriteStream(filePath); 
let written = 0; 
function writeChunk() { 
  while (written < targetSize) { 
    written += Buffer.byteLength(chunk); 
    const ok = writer.write(chunk); 
    if (!ok) { writer.once("drain", writeChunk); return; } 
  } 
  writer.end(); 
} 
writer.on("finish", () => { 
  const size = (fs.statSync(filePath).size / 1024 / 1024).toFixed(2); 
  console.log("File created: " + filePath + " (" + size + " MB)"); 
}); 
writeChunk(); 
