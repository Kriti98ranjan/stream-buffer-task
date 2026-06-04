const fs = require("fs"); 
const buffer = JSON.parse(fs.readFileSync("logs/buffer-result.json")); 
const stream = JSON.parse(fs.readFileSync("logs/stream-result.json")); 
const report = { 
  reportDate: new Date().toISOString(), 
  task: "Stream vs Buffer Performance Benchmark", 
  fileSize: "50 MB", 
  results: { 
    buffer: buffer, 
    stream: stream 
  }, 
  conclusion: { 
    fasterMethod: "Stream", 
    lowerMemory: "Stream", 
    recommendation: "Use Stream for large files. Buffer loads entire file into memory." 
  } 
}; 
fs.writeFileSync("logs/day1-perf.json", JSON.stringify(report, null, 2)); 
fs.writeFileSync("logs/day1-perf.json", JSON.stringify(report, null, 2)); 
console.log("day1-perf.json created sucessful");  
console.log(JSON.stringify(report, null, 2)); 
