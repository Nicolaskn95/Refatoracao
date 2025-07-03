const plays = {
  "hamlet": { "name": "Hamlet", "type": "tragedy" },
  "macbeth": {
    "name": "Macbeth",
    "type": "comedy",
  },
  "othello": {
    "name": "Othello",
    "type": "tragedy",
  },
  //   "king-lear": {
  //     "name": "King Lear",
  //     "type": "tragedy",
  //   },
  //   "a-midsummer-nights-dream": {
  //     "name": "A Midsummer Night's Dream",
  //     "type": "comedy",
  //   },
  //   "the-tempest": {
  //     "name": "The Tempest",
  //     "type": "comedy",
  //   },
  //   "the-merchant-of-venice": {
  //     "name": "The Merchant of Venice",
  //     "type": "comedy",
  //   },
  //   "twelfth-night": {
  //     "name": "Twelfth Night",
  //     "type": "comedy",
  //   },
};

const invoices = [
  {
    "customer": "BigCo",
    "performances": [
      { "playID": "hamlet", "audience": 55 },
      { "playID": "macbeth", "audience": 35 },
      { "playID": "othello", "audience": 40 },
      //   { "playID": "king-lear", "audience": 20 },
      //   { "playID": "a-midsummer-nights-dream", "audience": 30 },
      //   { "playID": "the-tempest", "audience": 25 },
      //   { "playID": "the-merchant-of-venice", "audience": 50 },
      //   { "playID": "twelfth-night", "audience": 45 },
    ],
  },
];

export { invoices, plays };
