import mongoose from 'mongoose';

const hospitalSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  addrecss:{
    type:String,
    required:true,
  },
  addrecss2:{
    type: String,
  },
  spshalisdIn:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true 
  },
  pincode:{
    type:String,
    required:true
  }

}, { timestamp: true });

export const Hospital = mongoose.model('Hospital', hospitalSchema);
