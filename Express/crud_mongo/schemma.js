const Schema = mongoose.Schema;
const myDataSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});