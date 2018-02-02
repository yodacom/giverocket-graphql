import * as BidderServices from '../../services/bidderServices'

export default {
  createBidder: (_, { username }) => {
    try {
      return BidderServices.createBidder(username)
    } catch (error) {
      throw error;
    }
  },
};