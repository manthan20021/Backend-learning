import mongoose from 'mongoose';

const productItemSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  contity: {
    type: Number,
    required: true,
  },
});

const orderSchema = mongoose.Schema(
  {
    costmoer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    orderPrice: {
      type: Number,
      required: true,
      default: 0,
    },

    addrece: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Addrecs',
      required: true,
    },

    orderItems: {
      type: [productItemSchema],
    },
    status:{
      type:String,
      enam: ['PENDING','CANCELLED','DELIVERED'],
      default: 'PENDING',
    }
  },
  { timestamp: true }
);

export const Order = mongoose.model('Order', orderSchema);
