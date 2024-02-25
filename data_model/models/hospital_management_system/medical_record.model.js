import mongoose from 'mongoose';

const madicaleSchema = mongoose.Schema(
  {
    pacent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pacent',
      recquird: true,
    },
    docter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Docter',
    },
    madecien: {
      type: String,
      required: true,
    },
    bloodTestReport: {
      type: String,
    },
  },
  { timestamp: true }
);

export const Madicale = mongoose.model('Madicale', madicaleSchema);
