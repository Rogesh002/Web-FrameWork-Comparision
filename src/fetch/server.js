"use strict"
import http2 from 'node:http2';

const port = process.argv[3] || 3004
console.log(`fetch is listening on ${port}`)

http2.createServer((request, response) => {
    
}).listen(port)