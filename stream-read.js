const fs = require("fs"); 
const { performance } = require("perf_hooks"); 
console.log("Reading file using Stream (fs.createReadStream)..."); 
const memBefore = process.memoryUsage().heapUsed; 
const startTime = performance.now(); 
const stream = fs.createReadStream("testfile.txt"); 
let totalBytes = 0; 
stream.on("data", chunk => { totalBytes += chunk.length; }); 
stream.on("error", err => console.error(err)); 
stream.on("end", () => { 
  const endTime = performance.now(); 
  const memAfter = process.memoryUsage().heapUsed; 
  const result = { 
    method: "Stream - fs.createReadStream", 
    fileSizeMB: (totalBytes / 1024 / 1024).toFixed(2) + " MB", 
    executionTimeMs: (endTime - startTime).toFixed(2) + " ms", 
    memoryBeforeMB: (memBefore / 1024 / 1024).toFixed(2) + " MB", 
    memoryAfterMB: (memAfter / 1024 / 1024).toFixed(2) + " MB", 
    memoryUsedMB: ((memAfter - memBefore) / 1024 / 1024).toFixed(2) + " MB" 
  }; 
  console.log("===== STREAM RESULT ====="); 
  console.table(result); 
  fs.writeFileSync("logs/stream-result.json", JSON.stringify(result, null, 2)); 
  console.log("Saved to logs/stream-result.json"); 
}); 
