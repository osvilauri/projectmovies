const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.port || 3000;
const MongoClient = require('mongodb').MongoClient;
const mongodbUrl = "mongodb+srv://admindev:admin****@cluster0-8yhzm.mongodb.net/sampledb?retryWrite=true&w=majority";

var db, collection;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.listen( PORT, () => MongoClient.connect(mongodbUrl,{useUnifiedTopology:true, useNewUrlParser:true})
    .then(client => {
        console.log('Connected to Mongo Database');
        db = client.db('sampledb');
        collection = db.collection('starred_movies');
        console.log('Connected to mongo database');
    })
);

app.get("/", (req,res)=>{
    res.send('Server to connect with mongo')
});

// Basic operations for MongoDB

app.get("/starred_movies", (request, response) => {
    collection.find().toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        } else {
            response.send(result);
            console.log(result);
        }
    });
});

app.get("/starred_movies/idMovie/:idMovie", (request, response) => {
    collection.find({idMovie:parseInt(request.params.idMovie)}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        } else {
            response.send(result);
            console.log(result);
        }
    });
});

app.post("/starred_movies", (request, response) => {
    console.log('Body',request.body);
    collection.insertOne(request.body, {writeConcern: request.body})
        .then( res => {
            console.log('added');
            response.send(res)
        })
        .catch(err => console.log(err))
});

app.put("/starred_movies/idMovie/:idMovie", (request, response) => {
    collection.updateOne({idMovie:parseInt(request.params.idMovie)}, {$set:request.body})
        .then((error, result) => {
            if(error) {
                return response.status(500).send(error);
            } else {
                response.send(result.json());
                console.log(result);
            }
        })
        .catch( err => console.log(err))

});
