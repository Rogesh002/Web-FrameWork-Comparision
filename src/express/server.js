import express, { request } from 'express';
import mock from "./utils/mockdata.js";

const app = express();

let port = process.env.port || 3000 ;

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

app.get("/expressGet",(request,response)=>{

    response.send(JSON.stringify(mock));
    // if(error){
    //     console.error("its an error");
    // }
    // else{
    //  response.send(JSON.stringify(mock));
    // }
});

