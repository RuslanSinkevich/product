import { IProducts } from "../models/product";

export const prodData: IProducts[] = [
  {
    id: 1,
    prodName: "Нямушка",
    prodContent: "c фуа-гра",
    prodDetail: {
      count: "10 порций <br/> мышь в подарок",
      weight: "0,5",
    },
    prodDescription: "Печень утки разварная с артишоками.",
    prodEnded: false
  },
  {
    id: 2,
    prodName: "Нямушка",
    prodContent: "с рыбой",
    prodDetail: {
      count: "40 порций <br/> 2 мыши в подарок",
      weight: "2",
    },
    prodDescription: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    prodEnded: true
  },
  {
    id: 3,
    prodName: "Нямушка",
    prodContent: "с курой",
    prodDetail: {
      count: "100 порций  <br/> 5 мышей в подарок  <br/> заказчик доволен",
      weight: "5",
    },
    prodDescription: "Филе из цыплят с трюфелями в бульоне.",
    prodEnded: true
  },
  
];
