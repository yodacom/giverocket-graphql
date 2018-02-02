import AuctionResolvers from './auctionResolvers';
import BidderResolvers from './bidderResolvers';
import BidItemResolvers from './bidItemResolvers';

export default {
  Query: {
    getAuctionItems: AuctionResolvers.getAuctionItems
  },
  Mutation: {
    createAuctionItem: AuctionResolvers.createAuctionItem,
    createBidder: BidderResolvers.createBidder,
    createBidItem: BidItemResolvers.createBidItem,
  }
};
