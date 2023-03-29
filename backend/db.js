const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoURI =
  "mongodb+srv://Gofood:gofood123@cluster0.xbuhepe.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("ERROR");
      else {
        console.log("Server Connected Successfully.");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray((err, data) => {
          if (err) console.log(err);
          else {
            console.log();
          }
        });
      }
    }
  );
};

module.exports = mongoDB;
