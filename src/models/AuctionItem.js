import mongoose, { Schema } from 'mongoose';

const AuctionItemSchema = new Schema({
  currentBid: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('AuctionItem', AuctionItemSchema);
