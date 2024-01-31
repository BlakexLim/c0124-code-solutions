interface Orders {
  item: string;
  item2?: string;
  author?: string;
  itemPrice: string;
  itemPrice2?: string;
  deliveryStat: string;
  return: string;
  orderPlaced: string;
  total: string;
  shipTo: string;
  orderNum: string;
}

const orderHistory: Orders[] = [
  {
    item: 'JavaScript for Impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    itemPrice: '$31.55',
    deliveryStat: 'Delivered Aug 8, 2020',
    return: 'Return window closed on Sep 7, 2020',
    orderPlaced: 'August 4, 2020',
    total: '$34.00',
    shipTo: 'JS Masher',
    orderNum: 'ORDER # 114-3941689-8772232',
  },
  {
    item: 'The Timeless Way of Building',
    author: 'Alexander, Christopher',
    itemPrice: '$41.33',
    deliveryStat: 'Delivered Jul 20, 2020',
    return: 'Return window closed on Aug 19, 2020',
    orderPlaced: 'July 19, 2020',
    total: '$44.53',
    shipTo: 'JS Masher',
    orderNum: 'ORDER # 113-9984268-1280257',
  },
  {
    item: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    itemPrice: '$17.22',
    deliveryStat: 'Delivered Jul 7, 2020',
    return: 'Return window closed on Aug 5,2020',
    orderPlaced: 'July 4, 2020',
    total: '$17.22',
    shipTo: 'JS Masher',
    orderNum: 'ORDER # 114-2875557-9059409',
  },
  {
    item: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
    item2: 'The Art of Sql',
    itemPrice: '$94.95',
    itemPrice2: '$33.99',
    deliveryStat: 'Delivered Jul 5, 2020',
    return: 'Return window closed on Aug 4, 2020',
    orderPlaced: 'July 3, 2020',
    total: '$138.93',
    shipTo: 'JS Masher',
    orderNum: 'ORDER # 113-2883177-2648248',
  },
];
