import mongoose from "mongoose";

const sellRequestSchema = new mongoose.Schema({

  id: { type: String },
  name: { type: String },
  grade: {
    type: [{
      gradeLevel: { type: String },
      properties: {
        type: [{
          storage: { type: String },
          price: { type: String },
        }],
      },
    }],
  },

});

const SellRequest = mongoose.model("Genre", sellRequestSchema);

export default SellRequest;
