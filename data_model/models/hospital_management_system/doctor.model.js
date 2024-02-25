import mongoose from 'mongoose';

const docterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    colifection: {
      type: String,
      required: true,
    },
    expereansInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamp: true }
);

export const Docter = mongoose.model('Docter', docterSchema);
