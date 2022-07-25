export interface ITransaction{
    id: string;
    check:boolean
    date: string,
    merch_invoice: number,
    merchant: string,
    location: string,
    icao_iata: string,
    dodaac: string,
    tail: string,
    item: string,
    total: string,
    card: string,
    number_card: string,
    new: boolean,
    disputed: boolean,
    delinquent: boolean,
    rejected: boolean,
    accepted: boolean,
    has_invoice: boolean,
    transaction_created: string,
    transaction_delayed: string,
    details: IDetailTransaction[]
}

export interface IDetailTransaction{
  merchant_description: string,
  product_code?: number,
  quantity?: number,
  retail_price?: string,
  gov_price?: string,
  amount: string,
  pos_receipt?: number
}