module.exports = function(mongoose) {

	var LevelSchema = new mongoose.Schema({
		title: String,
		question: String,
		isRendered: Boolean,
		options:[ String ]
	});

	var Level = mongoose.model("Level", LevelSchema);

	return Level;
};