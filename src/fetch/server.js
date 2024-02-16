"use strict";
import http2 from "http2";
import mockdata from "../utils/mockdata.js";
import { HttpStatusCode } from "axios";
const port = process.argv[3] || 5000;

http2
  .createServer((_, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write('hello');
    res.end();
  })
  .listen(port);
console.log(`fetch is listening on ${port}`);
