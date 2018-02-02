export default `
  type AuctionItem {
    _id: ID!
    title: String!
    currentBid: Int!

    createdAt: String!
    updatedAt: String!
  }

  type Bidder {
    _id: ID!
    username: String!

    createdAt: String!
    updatedAt: String!
  }


  type BidItem {
    _id: ID!
    currentBid: Int!

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