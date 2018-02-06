import AuctionItem from "../models/AuctionItem";

export const createAuctionItem = (title, currentBid) => {
  const auctionItem = new AuctionItem({ title, currentBid });

  return auctionItem.save();
};

export const getAuctionItems = () => {
  return AuctionItem.find({});
};
