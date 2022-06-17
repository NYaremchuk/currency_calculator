export interface IRate {
  ccy: string,
  base_ccy: string,
  buy: string,
  sale: string,
}

export enum AllCurrency {
  uah = 'UAH',
  usd = 'USD',
  eur = 'EUR',
  btc = 'BTC'
}