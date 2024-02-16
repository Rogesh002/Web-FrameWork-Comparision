import fastify from "fastify" ;
import mock from "../utils/mockdata.js";
const app = fastify({logger:true});



app.get("/",async(request,response)=>{
   response.send(JSON.stringify(mock)); 
  // console.log('welcome');
});

app.post("/")


app.listen({port:3000});
// (async () => {
//     try {
//       await app.listen(3000);
//       console.log(`Server listening on ${app.server.address().port}`);
//     } catch (err) {
//       app.log.error(err);
//       process.exit(1);
//     }
//   })();
// app.listen(3000,(error, address)=>{
//     console.log(`lisening to port ${address}`);
// });

// //console.log("welcome");

// const fastify = require("fastify");
// const app = fastify();

// app.get("/getproducts", async (req, res) => {
//     //const [results] = await app.mysql.query("SELECT * FROM product");
//     res.send(console.log("worked"));
   
//   });


  
//   app.listen(3000);