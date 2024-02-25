import mongoose from 'mongoose';
import { Categroy } from './categroy.model';

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    descrpction: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    productImage: {
      type: String,
      required: true,
    },
    woner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    Categroy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categroy',
    },
    stock:{
      type: Number,
      default:0
    }
  },
  { timestamp: true }
);

export const Product = mongoose.model('Product', productSchema);
