# System Performance Report 
 
## 1. Buffer Result 
![Buffer Result](Screenshots/screenshot-buffer.png) 
 
## 2. Stream Result 
![Stream Result](Screenshots/screenshot-stream.png) 
 
## 3. day1-perf.json Output 
![Perf JSON](Screenshots/screenshot-perf.png) 
 
## 4. Git Commits 
![Git Commits](Screenshots/screenshot-commits.png) 
 
## 5. Introspect Output 
![Introspect](Screenshots/screenshot-introspect.png) 
 
## 6. Conclusion 
- Buffer: 44.32ms, 0.05MB memory used 
- Stream: 75.30ms, 0.80MB memory used 
- For this test, the Buffer implementation performed better than the Stream implementation.Buffer completed the operation in 44.32ms compared to 75.30ms for Stream and used less memory 
 
## Conclusion 
 
### Buffer vs Stream Comparison 
- Buffer loads entire file into RAM at once 
- Buffer Execution Time : 43.61ms 
- Buffer Memory Used    : 0.05MB 
- Stream reads file in small chunks 
- Stream Execution Time : 85.08ms 
- Stream Memory Used    : 0.081MB 
 
