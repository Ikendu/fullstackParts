const dns = require("dns");
const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.error(
    "Please provide the password as an argument: node mongo.js <password>",
  );
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://morelinks:${password}@morelinks.8watgf1.mongodb.net/phonebook?retryWrites=true&w=majority&appName=morelinks`;

// Use public DNS servers for SRV record resolution if the local resolver is refusing the query.
dns.setServers(["8.8.8.8", "8.8.4.4"]);
console.log("Node DNS servers:", dns.getServers());

mongoose.set("strictQuery", false);

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Phonebook = mongoose.model("Phonebook", phonebookSchema);

const phonebook = new Phonebook({
  name: "Gift Aniede",
  number: "0802 3613 691",
});

mongoose
  .connect(url, { family: 4 })
  .then(() => {
    console.log("Connected to MongoDB");
    return phonebook.save();
  })
  .then((result) => {
    console.log("Phonebook saved!", result);
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  })
  .finally(() => {
    mongoose.connection.close();
  });
