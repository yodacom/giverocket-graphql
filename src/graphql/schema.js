export default `
  type AuctionItem {
    _id: ID!
    donor: Donor!
    title: String!
    desc: String!
    startingBid: Int!
    currentBid: Int!
    img: String!
    imgCaption!
    createdAt: String!
    updatedAt: String!
  }

  type Bidder {
    _id: ID!
    first_name: String!
    last_name: String!
    username: String!
    password: String!
    email: String!
    items: [bidItem]
    createdAt: String!
    updatedAt: String!
  }


  type BidItem {
    _id: ID!
    auction: String!
    auctionItem: AuctionItem!
    currentBid: Int! // where does this come from?

    SelectItemCheckBox: boolean




    bidder: Bidder!
    auctionItem: AuctionItem!

    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getAuctionItems: [AuctionItem]!
  }

  type Mutation {
    createAuctionItem(title: String!, currentBid: Int): AuctionItem!
    createBidder(username: String!): Bidder!
    createBidItem(bidder: String!, auctionItem: String!, currentBid: Int): BidItem!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
