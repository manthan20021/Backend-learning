import mongoose from 'mongoose';

const categroySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Categroy = mongoose.model('Categroy', categroySchema);
