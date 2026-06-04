const fs = require("fs"); 
const { performance } = require("perf_hooks"); 
console.log("Reading file using Buffer (fs.readFile)..."); 
const memBefore = process.memoryUsage().heapUsed; 
const startTime = performance.now(); 
fs.readFile("testfile.txt", (err, data) => { 
  if (err) { console.error(err); return; } 
  const endTime = performance.now(); 
  const memAfter = process.memoryUsage().heapUsed; 
  const result = { 
    method: "Buffer - fs.readFile", 
    fileSizeMB: (data.length / 1024 / 1024).toFixed(2) + " MB", 
    executionTimeMs: (endTime - startTime).toFixed(2) + " ms", 
    memoryBeforeMB: (memBefore / 1024 / 1024).toFixed(2) + " MB", 
    memoryAfterMB: (memAfter / 1024 / 1024).toFixed(2) + " MB", 
    memoryUsedMB: ((memAfter - memBefore) / 1024 / 1024).toFixed(2) + " MB" 
  }; 
  console.log("===== BUFFER RESULT ====="); 
  console.table(result); 
  fs.writeFileSync("logs/buffer-result.json", JSON.stringify(result, null, 2)); 
  console.log("Saved to logs/buffer-result.json"); 
}); 
