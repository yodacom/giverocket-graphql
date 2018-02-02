import * as BidItemsServices from '../../services/bidItemsServices'

export default {
  createBidItem: (_, { bidder, currentBid, auctionItem }) => {
    try {
      return BidItemsServices.createBidItem(bidder, auctionItem, currentBid)
    } catch (error) {
      throw error;
    }
  },
};