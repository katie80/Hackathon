// Requires express, mongoose, body-parser

// Initialize express
var express = require("express");
// Initialize express app
var app = express();

// Initialize mongoose
var mongoose = require("mongoose");

// Initialize port constant
const PORT = process.env.port || 8000;

// Use mongoose to connect to mogo database
mongoose.connect("mongodb://localhost");

// import level constructor
var LevelConstructor = require("./level.js");
// initialize schema 
var Level = LevelConstructor(mongoose);

var Levels = {};

// Initialize bodyparser
var bodyParser = require("body-parser");

// Set body parser urlencoding 
app.use(bodyParser.urlencoded({extended: false}));

// Set first layer of express stack as bodyParser
app.use(bodyParser.json());

// Use public folder
app.use(express.static('public'));

// Set secound layer of express stack to server index on get request to "/" 
app.get("/", (req, res) => {
	// Send index.html stored in current directory 
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/levels", (req, res) => {
	Level.find({}, (err, levels) => {
		// Update Levels array for storage as JSON
		for(var i in levels){
			var levelJSON = {
				_id: levels[i]._id,
				content: {
					title: levels[i].title,
					question: levels[i].question,
					isRendered: levels[i].isRendered,
					options: levels[i].options
				}
			}
			// If the Level dosnt exist, add it to the Levels object
			if(!Levels[levelJSON._id]){
				Levels[levelJSON._id] = levelJSON.content;
			}
		}
		console.log(JSON.stringify(Levels));
		res.send(levels);
	});
});

app.post("/levels/add", (req, res) => {
	// Initialize instance of newLevel scheme with data supplied by request
	var newLevel = new Level({
		title: req.body.title,
	    question: req.body.question,
	    isRendered: req.body.isRendered,
	    options: req.body.options
	});

	newLevel.save((err) => {
		if(err){return};
	});

	console.log(newLevel.isRendered);
	res.send();
});

// Express Stack: Error Handling 

// Handle 404 error
app.use((req, res, next) => {
	res.status(404);
	res.send("File not found.");
});

// Handle 500 error
app.use((err, req, res, next) => {
	res.status(500);
	res.send("500 Error: Too much sass");
});

// Set express app to listen on defined port constant
app.listen(PORT, () => {
	console.log("Blog server Port: " + PORT);
});