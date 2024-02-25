import mongoose from 'mongoose';

const addrecsSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    townName: {
      type: String,
      required: true,
    },
    cityName: {
      type: String,
    },
    dis: {
      type: String,
      required: true,
    },
    steat: {
      type: string,
      requried: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    bulding: String,
    houseNumber: Number,
    nearBy: String,
  },
  { timestamp: true }
);

export const Addrecs = mongoose.model('Addrecs', addrecsSchema);
