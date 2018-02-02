import BidItem from '../models/BidItem';

export const createBidItem = async (bidder, auctionItem, currentBid) => {
  const bidItem = new BidItem({ bidder, auctionItem, currentBid });


  await bidItem.save();

  const res = await BidItem.findById(bidItem._id).populate('bidder').populate('auctionItem')

  console.log('====================================');
  console.log(res);
  console.log('====================================');

  return res
}

// 5a74a8c6e0aba26f0624e1fe

// AuctionItem
// 5a74a70f3b3a0f6a88539a0e