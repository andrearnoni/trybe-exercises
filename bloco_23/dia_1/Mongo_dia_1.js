db.bios.find({ "_id": 8 })

db.bios.find({ "_id": 8 }, { _id: true, name: true })

db.bios.find({ "_id": 8 }, { _id: false, name: true, birth: true })

db.bios.find({ "name.first": "John" }).pretty()

db.bios.find().limit(3).pretty()

db.bios.find().limit(2).skip(5)

db.books.count()

db.books.count({ "status": "PUBLISH" })

db.books.find({}, { _id: 0, title: 1, isbn: 1, pageCount: 1 }).limit(3)

db.books.find({ "status":"MEAP" }, { title: 1, authors: 1, status: 1 }).limit(10)
