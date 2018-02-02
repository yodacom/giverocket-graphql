import mongoose, { Schema } from 'mongoose';

const BidItemSchema = new Schema({
  auctionItem: { type: Schema.Types.ObjectId, ref: 'AuctionItem'},
  bidder: { type: Schema.Types.ObjectId, ref: 'Bidder' },
  currentBid: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

export default mongoose.model('BidItem', BidItemSchema);
