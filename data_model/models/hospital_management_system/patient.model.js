import mongoose from 'mongoose';

const pacentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      recquired: true,
    },
    gender: {
      type: String,
      enam: ['M', 'F', 'O'],
    },
    agge: {
      type: Number,
      required: true,
    },
    addrecess: {
      type: Number,
      required: true,
    },
    conttectNo:{
      type: Number,
      required:true
    },
    bloodGroup: {
      type: String,
      enam: ['A+', 'B+', 'A-', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      required: true,
    },
    addmitedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
    diagonsedWith:{
      type:String,
      reqired:true
    }
  },
  { timestamp: true }
);

export const Pacent = mongoose.model('Pacent', pacentSchema);
