const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(express.json());
app.use(cors());
MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true }) 
.then((client) => { 
  const db = client.db('games_hub');
  const wordsCollection = db.collection('games');
  const wordsRouter = createRouter(wordsCollection);
  app.use('/api/games', wordsRouter);
})
.catch(console.error); 


app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});



// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5000;
// app.use(cors());
// app.use(express.json());
// app.use(require("/Users/giovannipanni/Documents/codeclan_work/week_10_jsProject/wordType_JSProject/server/helpers/create_router.js"));
// // get driver connection
// const dbo = require("./db/conn");
 
// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });
