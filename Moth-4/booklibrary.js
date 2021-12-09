const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/test");
};
const app = express();

app.use(express.json());

// section Mongoose
const sectionSchema = new mongoose.Schema(
  {
    book_section: {type:String,require:true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Section = mongoose.model("section", sectionSchema); // section

// book Mongoose
const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    book_section_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
      required: true,
    },
    book_author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },  
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookSchema); // books collection

// Author Mongoose 
const authorSchema = new mongoose.Schema(
  {
    first_name : { type: String, required: true},
    last_name :{ type: String, required: true},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Author = mongoose.model("author", authorSchema); // authors collection

// Check Mongoose
const checkSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: {type: String, require:true},
  
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "book",
    required: true,
  },
},
  {
    versionKey: false,
    timestamps: true,
  }
);

const Check = mongoose.model("check", checkSchema); // Check collection

app.post("/check", async (req, res) => {
  try {
    const check = await Check.create(req.body);

    return res.status(201).send(check);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.get("/check", async (req, res) => {
  try {
    const check = await Check.find().lean().exec();

    return res.send(check);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});






// Section CRUD
app.post("/section", async (req, res) => {
  try {
    // console.log(req,res)
    const section = await Section.create(req.body);

    return res.status(201).send(section);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.get("/section", async (req, res) => {
  try {
    const section = await Section.find().lean().exec();

    return res.send({ section });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.get("/section/:id", async (req, res) => {
  try {
    const section = await Section.findById(req.params.id).lean().exec();

    return res.send(section);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.patch("/section/:id", async (req, res) => {
  try {
    const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(section);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.delete("/section/:id", async (req, res) => {
  try {
    const section = await Section.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(section);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});



// ------------ books CRUD -----------------
app.post("/books", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    console.log(book);
    return res.status(201).send(book);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find()
      .populate("book_section_id" )
      .populate("book_author_id")
      .lean()
      .exec();
    console.log(books)
    return res.send(books);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).lean().exec();

    return res.send(book);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.patch("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.send(book);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(book);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

// ------------ Author CRUD -----------------
app.post("/authors", async (req, res) => {
  try {
    const author = await Author.create(req.body);

    return res.status(201).send(author);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.get("/authors", async (req, res) => {
  try {
    const authors = await Author.find().lean().exec();

    return res.send(authors);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.get("/authors/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).lean().exec();

    return res.send(author);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.patch("/authors/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.send(author);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});



app.listen(2345, async function () {
  await connect();
  console.log("listening on port 2345");
});
