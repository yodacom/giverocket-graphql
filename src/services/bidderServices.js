import Bidder from '../models/Bidder';

export const createBidder = async (username) => {
  const bidder = new Bidder({ username });

  return bidder.save();
}