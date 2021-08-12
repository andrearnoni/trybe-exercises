// requisito 1:
db.movies.updateOne({ title: "Batman"}, { $set: { imdbRating: 7.7 }});

// requisito 2:
db.movies.updateOne({ title: "Godzilla"}, { $set: { budget: 1 }});

// requisito 3:
db.movies.updateOne({ title: "Home Alone"}, { $set: { budget: 15 }, $min: { imdbRating: 5.5 }});

// requisito 4:
db.movies.updateOne({ title: "Batman"}, { $inc: { imdbRating: 2 }});

// requisito 5:
db.movies.updateOne({ title: "Home Alone"}, { $max: { budget: 20 }});

// requisito 6:
db.movies.updateOne({ title: "Batman"}, { $mul: { imdbRating: 4 }});

// requisito 7:
db.movies.updateOne({ title: "Batman"}, { $rename: { budget: "estimatedBudget" }});

// requisito 8:
db.movies.updateOne({ title: "Home Alone"}, { $min: { budget: 5 }});

// requisito 9:
db.movies.updateOne({ title: "Godzilla"}, { $max: { imdbRating: 8.6 }, $set: { "category.1": "thriller" }});

// requisito 10:
db.movies.updateOne({ title: "Home Alone"}, { $currentDate: { lastUpdated: { $type: "timestamp"} }});

// requisito 11:
db.movies.updateMany({}, { $set: { sequels: 0 }});

// requisito 12:
db.movies.updateMany({}, { $unset: { budget: "", estimatedBudget: "" }});

// requisito 13:
db.movies.updateMany({ $or: [{ title: { $in: ["Batman", "Home Alone"] }}] }, { $max: { imdbRating: 17 } });