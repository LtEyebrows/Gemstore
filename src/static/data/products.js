const PRODUCTS = [
  {
    id: 1,
    name: "Dodecahedron",
    price: 2.95,
    description: "Some gems have hidden qualities beyonf their lustre, beyond their shine... Dodecahredon is one of those gems",
    imagePath: "../../static/img/gem-01.gif",
    inventory: 10,
    reviews: [
      {
        id: 1,
        createDate: "Tuesday",
        author: "Derek",
        rating: 1,
        body: "I was told I could rub this on my skin to live forever but I died last Thursday. False advertising; I would like my money back."
      },
      {
        id: 2,
        createDate: "Wednesday",
        author: "Joseph",
        rating: 5,
        body: "You rub it on your skin, and you live forever!"
      }
    ]
  },
  {
    id: 2,
    name: "Pentagonal",
    price: 5.95,
    description: "The origin of the pentagonal gem is unknown, hence it's low value",
    imagePath: "./static/img/gem-02.gif",
    inventory: 0,
    reviews: [
      {
        id: 1,
        createDate: "Monday",
        author: "Ripal",
        rating: 1,
        body: "I thought these were supposed to give me V-Bucks wtf"
      },
      {
        id: 2,
        createDate: "Friday",
        author: "Frank",
        rating: 4,
        body: "Why are you in my home please leave or I'll call the cops"
      }
    ]
  },
  {
    id: 3,
    name: "Hexagonal",
    price: 12.95,
    description: "The hexagonal gem is one of our best sellers",
    imagePath: "./static/img/gem-03.gif",
    inventory: 10,
    reviews: [
      {
        id: 5,
        createDate: "Sunday",
        author: "Ryan",
        rating: 5,
        body: "Bought for a hot babe and got to smash. 10/10 buy for all my hoes to crush puss"
      },
      {
        id: 1,
        createDate: "Thursday",
        author: "Ananya",
        rating: 1,
        body: "My son used my credit card to buy these for his Nintendo but customer service won't give me a refund"
      }
    ]
  }
];

export default PRODUCTS;
