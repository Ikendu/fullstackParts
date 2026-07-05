const mongoose = require("mongoose");
const dns = require("dns");

const url = process.env.MONGODB_URI;

// const url = `mongodb+srv://morelinks:${password}@morelinks.8watgf1.mongodb.net/phonebook?retryWrites=true&w=majority&appName=morelinks`;
dns.setServers(["8.8.8.8", "8.8.4.4"]);
console.log("Node DNS servers:", dns.getServers());

mongoose.set("strictQuery", false);

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
});

module.exports = mongoose.model("Phonebook", phonebookSchema);

phonebookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__id;
  },
});

try {
  const masked = url.replace(/:[^:@]+@/, ":****@");
  console.log("Attempting mongoose.connect to:", masked);
} catch (e) {
  console.log("Attempting mongoose.connect (could not mask URI)");
}

mongoose
  .connect(url, { family: 4 })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.error(
      "mongoose.connect error:",
      err && err.message ? err.message : err,
    );
  });
