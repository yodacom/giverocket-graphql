import mongoose, { Schema } from 'mongoose';

const BidderSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  bidItems: [
    {
      type: Schema.Types.ObjectId,
      ref: 'BidItem'
    }
  ]
}, { timestamps: true });

export default mongoose.model('Bidder', BidderSchema);
