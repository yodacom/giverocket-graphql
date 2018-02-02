import * as AuctionServices from '../../services/auctionServices'

export default {
  createAuctionItem: (_, { title, currentBid }) => {
    try {
      return AuctionServices.createAuctionItem(title, currentBid)
    } catch (error) {
      throw error;
    }
  },
  getAuctionItems: () => {
    try {
      return AuctionServices.getAuctionItems();
    } catch (error) {
      throw error;
    }
  }
};