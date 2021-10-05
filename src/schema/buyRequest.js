import mongoose from "mongoose";

const buyRequestSchema = new mongoose.Schema({

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

const BuyRequest = mongoose.model("Genre", buyRequestSchema);
export default BuyRequest;
